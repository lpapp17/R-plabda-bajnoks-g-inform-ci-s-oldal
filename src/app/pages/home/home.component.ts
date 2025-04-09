import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HomeComponent,MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
