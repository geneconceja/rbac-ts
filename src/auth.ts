// auth.ts — login/logout/session persistence (localStorage) goes here
import {User, Role} from './types';

const sessionKey = localStorage.getItem('rbac-demo:session');

const usersList = [
  {
    id: 1,
    username: 'admin01',
    email: 'admin01@example.com',
    createdAt: Date.now(),
    isActive: true,
    role: 'admin' as Role,
  }
]