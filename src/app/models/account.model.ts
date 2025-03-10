export interface Account {
    id?: number;
    accountNumber: string;
    accountHolder: string;
    balance: number;
    accountType: 'savings' | 'checking';
    email: string;
    phone: string;
    createdAt: Date;
  }