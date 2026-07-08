// types.ts — Role, Permission, User, Session type definitions go here
export interface Permission {
  resource: string;
  action: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: number;
  isActive: boolean;
  role: Role;
}

export interface Session {
  user: User;
  issuedAt: number;
  expiresAt: number;
}

export type Role = 'admin' | 'editor' | 'viewer';