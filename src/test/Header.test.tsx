import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "@/components/Header";
import { LanguageProvider } from "@/hooks/useLanguage";

// "describe" agrupa testes relacionados
describe("Header", () => {

  // Função auxiliar para renderizar o Header com o contexto necessário
  const renderHeader = () =>
    render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    );

  // "it" define um teste individual
  it("deve renderizar a logo", () => {
    renderHeader();
    // "screen.getByAltText" busca um elemento pela prop alt
    const logo = screen.getByAltText("Rodrigo Ottoboni Logo");
    // "toBeInTheDocument" verifica se o elemento existe na tela
    expect(logo).toBeInTheDocument();
  });

  it("deve exibir os links de navegação", () => {
    renderHeader();
    // Verifica se os links de navegação existem
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("deve trocar o idioma ao clicar no botão de idioma", () => {
    renderHeader();
    // Antes da troca, deve estar em português
    expect(screen.getByText("Sobre")).toBeInTheDocument();

    // "fireEvent.click" simula um clique do usuário
    const langButton = screen.getByTitle("Switch to English");
    fireEvent.click(langButton);

    // Após o clique, deve estar em inglês
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});