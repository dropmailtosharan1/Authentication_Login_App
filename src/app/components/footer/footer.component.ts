import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer bg-light py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">© 2025 Banking App. All rights reserved.</span>
      </div>
    </footer>
  `
})
export class FooterComponent {}