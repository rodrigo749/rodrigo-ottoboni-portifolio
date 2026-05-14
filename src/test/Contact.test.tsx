import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Contact from "@/components/Contact";
import { LanguageProvider } from "@/hooks/useLanguage";

// "vi.mock" simula (mocka) o Firebase para não fazer chamadas reais no teste
vi.mock("@/lib/firebase", () => ({
  db: {},
}));

vi.mock("firebase/firestore", () => ({
  collection: vi.fn(),
  addDoc: vi.fn(() => Promise.resolve({ id: "test-id" })),
  serverTimestamp: vi.fn(() => new Date()),
}));

describe("Contact", () => {
  const renderContact = () =>
    render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    );

  it("deve renderizar o formulário de contato", () => {
    renderContact();
    // Verifica se os campos do formulário existem
    expect(screen.getByPlaceholderText("Seu nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("seu@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Assunto da mensagem")).toBeInTheDocument();
  });

  it("deve mostrar erro ao enviar formulário vazio", async () => {
    renderContact();
    // Clica no botão de enviar sem preencher os campos
    const submitButton = screen.getByRole("button", { name: /enviar mensagem/i });
    fireEvent.click(submitButton);

    // "waitFor" espera elementos aparecerem de forma assíncrona
    await waitFor(() => {
      expect(screen.getByText(/preencha todos os campos/i)).toBeInTheDocument();
    });
  });

  it("deve preencher e enviar o formulário com sucesso", async () => {
    renderContact();

    // "fireEvent.change" simula o usuário digitando em um campo
    fireEvent.change(screen.getByPlaceholderText("Seu nome"), {
      target: { value: "João Silva" },
    });
    fireEvent.change(screen.getByPlaceholderText("seu@email.com"), {
      target: { value: "joao@email.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Assunto da mensagem"), {
      target: { value: "Oportunidade de trabalho" },
    });
    fireEvent.change(screen.getByPlaceholderText(/sua mensagem/i), {
      target: { value: "Olá, gostaria de conversar sobre uma vaga." },
    });

    // Clica no botão de enviar
    const submitButton = screen.getByRole("button", { name: /enviar mensagem/i });
    fireEvent.click(submitButton);

    // Verifica se a mensagem de sucesso aparece
    await waitFor(() => {
      expect(screen.getByText(/mensagem enviada/i)).toBeInTheDocument();
    });
  });
});