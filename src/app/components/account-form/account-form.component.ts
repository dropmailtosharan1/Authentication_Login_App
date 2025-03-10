import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../models/account.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container mt-4">
      <h2>Create New Account</h2>
      <form (ngSubmit)="onSubmit()" #accountForm="ngForm">
        <div class="mb-3">
          <label for="accountHolder" class="form-label">Account Holder Name</label>
          <input
            type="text"
            class="form-control"
            id="accountHolder"
            [(ngModel)]="account.accountHolder"
            name="accountHolder"
            required
          >
        </div>
        <div class="mb-3">
          <label for="accountType" class="form-label">Account Type</label>
          <select
            class="form-select"
            id="accountType"
            [(ngModel)]="account.accountType"
            name="accountType"
            required
          >
            <option value="savings">Savings</option>
            <option value="checking">Checking</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            [(ngModel)]="account.email"
            name="email"
            required
          >
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            [(ngModel)]="account.phone"
            name="phone"
            required
          >
        </div>
        <div class="mb-3">
          <label for="balance" class="form-label">Initial Balance</label>
          <input
            type="number"
            class="form-control"
            id="balance"
            [(ngModel)]="account.balance"
            name="balance"
            required
          >
        </div>
        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
    </div>
  `
})
export class AccountFormComponent {
  account: Account = {
    accountHolder: '',
    accountNumber: '',
    accountType: 'savings',
    balance: 0,
    email: '',
    phone: '',
    createdAt: new Date()
  };

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  onSubmit() {
    this.account.accountNumber = 'ACC' + Math.floor(Math.random() * 1000000);
    this.accountService.createAccount(this.account).subscribe({
      next: () => {
        this.router.navigate(['/accounts']);
      },
      error: (error) => {
        console.error('Error creating account:', error);
      }
    });
  }
}