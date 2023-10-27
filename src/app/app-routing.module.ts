import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 { path:'', component:HomeComponent,
  data: {
    title: 'Title for Home Component',
    description: 'Description of Home Component',
    ogTitle: 'Description of Home',
  }
},
{path:'about', component:AboutComponent,
data: {
  title: 'Title for About Component',
  description: 'Description of About Component',
  ogTitle: 'Description of About Component ',
}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
