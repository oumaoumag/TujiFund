export type UserRole = 'member' | 'secretary' | 'chairman' | 'treasurer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  totalContributions?: number;
  joinedAt?: string;
  lastContribution?: string;
}

export interface Contribution {
  id: string;
  userId: string;
  amount: number;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Dividend {
  id: string;
  userId: string;
  amount: number;
  date: string;
  status: 'pending' | 'distributed';
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}