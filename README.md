# Rodrigo Ottoboni Dias — Portfolio

🌐 **Acesse a aplicação:** [https://rodrigo-ottoboni.vercel.app/](https://rodrigo-ottoboni.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

### Core
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React** | 18+ | Biblioteca principal de UI |
| **TypeScript** | 5+ | Superset tipado do JavaScript |
| **Vite** | 5+ | Build tool e dev server |

### Estilização
| Tecnologia | Descrição |
|------------|-----------|
| **Tailwind CSS** | Framework de estilos utilitários |
| **shadcn/ui** | Componentes de UI acessíveis e customizáveis |
| **Framer Motion** | Animações e transições |
| **Lucide React** | Biblioteca de ícones |

### Backend & Dados
| Tecnologia | Descrição |
|------------|-----------|
| **Firebase** | Plataforma backend (BaaS) |
| **Firestore** | Banco de dados NoSQL para mensagens de contato |

### Internacionalização
| Tecnologia | Descrição |
|------------|-----------|
| **Context API** | Gerenciamento de estado do idioma (PT/EN) |

---

## 📁 Estrutura do Projeto

```
rodrigo-ottoboni/
├── public/                  # Arquivos públicos estáticos
├── src/
│   ├── assets/              # Imagens e recursos estáticos
│   ├── components/          # Componentes React
│   │   ├── ui/              # Componentes base (shadcn/ui)
│   │   ├── Header.tsx       # Cabeçalho com navegação e troca de idioma
│   │   ├── Hero.tsx         # Seção principal
│   │   ├── About.tsx        # Sobre mim
│   │   ├── Skills.tsx       # Habilidades técnicas
│   │   ├── Experience.tsx   # Experiências profissionais
│   │   ├── Projects.tsx     # Projetos
│   │   ├── Contact.tsx      # Formulário de contato
│   │   └── Footer.tsx       # Rodapé
│   ├── hooks/
│   │   └── useLanguage.tsx  # Hook e Context para internacionalização
│   ├── lib/
│   │   ├── firebase.ts      # Configuração do Firebase
│   │   ├── translations.ts  # Traduções PT/EN
│   │   └── utils.ts         # Funções utilitárias
│   ├── App.tsx              # Componente raiz
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais e tema
├── .env.example             # Exemplo de variáveis de ambiente
├── index.html               # HTML base
├── tailwind.config.ts       # Configuração do Tailwind
├── tsconfig.json            # Configuração do TypeScript
└── vite.config.ts           # Configuração do Vite
```

---

## ⚙️ Pré-requisitos

- **Node.js** >= 18.x
- **npm** >= 9.x

---

## 🔧 Configuração do Ambiente

1. Clone o repositório:
```sh
git clone https://github.com/seu-usuario/rodrigo-ottoboni.git
cd rodrigo-ottoboni
```

2. Instale as dependências:
```sh
npm install
```

3. Crie o arquivo `.env` na raiz do projeto baseado no `.env.example`:
```sh
cp .env.example .env
```

4. Preencha as variáveis de ambiente do Firebase no `.env`:
```env
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```

---

## ▶️ Rodando a Aplicação

### Desenvolvimento
```sh
npm run dev
```
Acesse em: [http://localhost:8080](http://localhost:8080)

### Build de Produção
```sh
npm run build
```

### Preview do Build
```sh
npm run preview
```

---

## 🧪 Rodando os Testes

### Executar todos os testes
```sh
npm run test
```

### Executar testes em modo watch
```sh
npm run test:watch
```

### Executar testes com cobertura
```sh
npm run test:coverage
```

### Verificar tipos TypeScript
```sh
npm run type-check
```

### Lint
```sh
npm run lint
```

---

## 🔥 Configuração do Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative o **Firestore Database**
4. Configure as regras de segurança do Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{messageId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

---

## 🌐 Internacionalização

O site suporta dois idiomas:
- 🇧🇷 **Português** (padrão)
- 🇬🇧 **English**

A troca de idioma é feita pelo botão de bandeira no header, traduzindo toda a aplicação instantaneamente.

---

## 📦 Deploy

### Build e deploy manual
```sh
npm run build
# A pasta "dist/" contém os arquivos prontos para deploy
```

### Plataformas recomendadas
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados © Rodrigo Ottoboni Dias.
