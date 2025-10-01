// Tipos para Login e Cadastro
export interface User {
  nomeCad: string;
  emailCad: string;
  cpfCad: string;
  telefoneCad: string;
}

export interface LoginData {
  loginCPF: string;
  loginTelefone: string;
}

export interface RegisterData {
  nome: string;
  email: string;
  cadCPF: string;
  cadTelefone: string;
}

// Tipos para Home Page
export interface HomeCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  linkTo: string;
}

// Tipos para Vídeos
export interface VideoCardProps {
  title: string;
  youtubeUrl: string;
}

// Tipos para Etapas/FAQ
export interface EtapaCardProps {
  step: string;
  description: React.ReactNode;
}

// Tipos para Integrantes
export interface IntegranteProps {
  id: string;
  nome: string;
  rm: string;
  turma: string;
  funcao: string;
  imgUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  bio?: string; 
}