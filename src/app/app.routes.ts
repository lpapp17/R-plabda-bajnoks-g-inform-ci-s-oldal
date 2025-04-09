import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { RefsComponent } from './pages/refs/refs.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    {path: 'home',title: 'Főoldal', component: HomeComponent},
    {path: 'matches',title: 'Meccsek', component: MatchesComponent},
    {path: 'refs',title: 'Bírók', component: RefsComponent},
    {path: 'teams',title: 'Csapatok', component: TeamsComponent},
    {path: 'profile',title: 'Profil', component: ProfileComponent},
    {path: 'login',title: 'Bejelentkezés', component: LoginComponent},
    {path: 'register',title: 'Regisztráció', component: RegisterComponent}
];
