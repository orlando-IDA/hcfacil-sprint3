// src/types/User.ts
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

export interface HomeCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  linkTo: string;
}