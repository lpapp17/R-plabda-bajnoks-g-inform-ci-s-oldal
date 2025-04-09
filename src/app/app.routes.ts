import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: 'home',title: 'Főoldal', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
    {path: 'matches',title: 'Meccsek', loadComponent: () => import('./pages/matches/matches.component').then(m => m.MatchesComponent)},
    {path: 'refs',title: 'Bírók', loadComponent: () => import('./pages/refs/refs.component').then(m => m.RefsComponent)},
    {path: 'teams',title: 'Csapatok', loadComponent: () => import('./pages/teams/teams.component').then(m => m.TeamsComponent)},
    {path: 'profile',title: 'Profil', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)},
    {path: 'login',title: 'Bejelentkezés', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)},
    {path: 'register',title: 'Regisztráció', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)}
];
