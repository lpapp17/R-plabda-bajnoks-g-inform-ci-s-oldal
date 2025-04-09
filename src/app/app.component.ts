import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgIf } from '@angular/common';
import { TeamsComponent } from './pages/teams/teams.component';
import { RefsComponent } from './pages/refs/refs.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { LoginComponent } from "./auth/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, ProfileComponent, TeamsComponent, RefsComponent, MatchesComponent, MenuComponent, NgIf, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Röplabda bajnokság';
  
}
