🏥 HC Fácil

🎯 **Objetivo do Projeto**

O HC Fácil é uma aplicação web desenvolvida como parte do Challenge da FIAP. O principal objetivo do projeto é reduzir a taxa de abstenção em consultas online no Hospital das Clínicas, oferecendo uma plataforma mais simples e eficiente para que os pacientes possam gerenciar seus agendamentos e tirar dúvidas.

🚀 **Como Utilizar o Site**

**Fluxo de Navegação**

1. **Página Inicial (Welcome)**
   - Ao acessar o site, você será direcionado para a rota `/welcome`
   - Esta página apresenta o HC Fácil e suas funcionalidades principais
   - Clique no botão "Vamos Começar" para acessar o sistema

2. **Login do Usuário**
   - Na tela de login, insira seus dados:
     - **CPF**: Digite um CPF fictício com até 11 dígitos (apenas números)
     - **Telefone**: Digite um número de telefone fictício com até 11 dígitos (apenas números)
   - Ambos os campos são validados para terem exatamente 11 dígitos
   - Clique em "Entrar" para acessar o sistema

3. **Página Principal (Home)**
   - Após o login bem-sucedido, você será redirecionado para a `/home`
   - Aqui você pode:
     - Visualizar e gerenciar agendamentos de consultas
     - Acessar tutoriais e vídeos explicativos
     - Entrar em contato com o suporte
     - Conhecer a equipe desenvolvedora

🛠️ **Tecnologias Utilizadas**

- **Front-End:**
  - React (com Vite)
  - TypeScript
- **Estilização:**
  - TailwindCSS
- **Roteamento:**
  - React Router DOM
- **Formulários:**
  - React Hook Form
- **Fontes:**
  - @fontsource/poppins (local)

📂 **Estrutura de Pastas**


```bash
HCFacil/
├── public/
│ └── assets/
│ └── imgs/
│ ├── logoHCFacil.ico
│ ├── logoHCFacil.png
│ └── medico-bemvindo.png
└── src/
├── components/
│ ├── LoginRegister/
│ │ └── LoginRegister.tsx
│ ├── Welcome/
│ │ └── Welcome.tsx
│ ├── Header.tsx
│ └── MainLayout.tsx
├── pages/
│ ├── Contato/
│ │ └── index.tsx
│ ├── Error/
│ │ └── index.tsx
│ ├── FAQ/
│ │ └── index.tsx
│ ├── ForgotPass/
│ │ └── index.tsx
│ ├── Home/
│ │ └── index.tsx
│ ├── IntegranteDetail/
│ │ └── index.tsx
│ ├── Integrantes/
│ │ └── index.tsx
│ ├── Login/
│ │ └── index.tsx
│ ├── MarqueConsulta/
│ │ └── index.tsx
│ ├── Sobre/
│ │ └── index.tsx
│ ├── Video/
│ │ └── index.tsx
│ └── Welcome/
│ └── index.tsx
├── types/
│ └── User.ts
├── App.css
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```
## ⚙️ Rodando o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/orlando-IDA/hcfacil-sprint3.git
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd hcfacil-sprint3
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

---

## 👨‍💻 Integrantes

| Nome Completo | RM | Turma |
| :--- | :---: | :---: |
| Gabriel Lourenço Martins | 562194 | 1TDSPG |
| Orlando Gonçalves | 561584 | 1TDSPG |

---

## 🔗 Links do Projeto

* **Link do Repositório GitHub:** `https://github.com/orlando-IDA/hcfacil-sprint3.git`
* **Vídeo de Apresentação (YouTube):** `https://youtu.be/kihM0oGQTtI`