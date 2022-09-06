import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { UserRegistryComponent } from './user-registry/user-registry.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'registry', component: UserRegistryComponent },
  { path: 'schedule', component: ScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
