import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ServicesComponent } from './content/services/services.component';
import { ContactComponent } from './content/contact/contact.component';
import { AboutComponent } from './content/about/about.component';
import { LoginComponent } from './content/auth/login/login.component';
import { RegisterComponent } from './content/auth/register/register.component';
import { MovieListComponent } from './content/movies/list/list.component';
import { MovieAddComponent } from './content/movies/add/add.component';
import { MovieEditComponent } from './content/movies/edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path: 'home', component: HomeComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'services', component: ServicesComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'about', component: AboutComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'movie/list', component: MovieListComponent },
  {path: 'movie/add', component: MovieAddComponent },
  {path: 'movie/edit/:id', component: MovieEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
