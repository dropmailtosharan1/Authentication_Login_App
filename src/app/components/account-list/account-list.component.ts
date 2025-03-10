import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '../../models/account.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Account List</h2>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Holder Name</th>
              <th>Type</th>
              <th>Balance</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let account of accounts">
              <td>{{ account.accountNumber }}</td>
              <td>{{ account.accountHolder }}</td>
              <td>{{ account.accountType }}</td>
              <td>{{ account.balance | currency }}</td>
              <td>{{ account.email }}</td>
              <td>{{ account.phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAccounts().subscribe({
      next: (accounts) => {
        this.accounts = accounts;
      },
      error: (error) => {
        console.error('Error fetching accounts:', error);
      }
    });
  }
}