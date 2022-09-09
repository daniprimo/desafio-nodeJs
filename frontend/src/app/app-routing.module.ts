import { UserHomeComponent } from './user-home/user-home.component';
import { HomeComponent } from './home/home.component';
import { HairServiceComponent } from './hair-service/hair-service.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { UserRegistryComponent } from './user-registry/user-registry.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: HairServiceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'registry', component: UserRegistryComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'userHome', component: UserHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
