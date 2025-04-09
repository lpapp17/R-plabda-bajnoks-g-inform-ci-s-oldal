import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../../shared/menu/menu.component';
import { HomeComponent } from '../../pages/home/home.component';
import { RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,MenuComponent,HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login:number = 1
  setLogin(){
    this.login = 0
  }
}
