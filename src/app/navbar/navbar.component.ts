import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isShowPhoneNavbar: boolean = true;

  hidePhoneNavbar() : void {
    if (window.innerWidth <= 600) {
      this.isShowPhoneNavbar = false;
    }
  }

  showPhoneNavbar() : void {
    if (window.innerWidth <= 600) {
      this.isShowPhoneNavbar = true;
    }
  }

}
