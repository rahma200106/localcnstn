import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualiteComponent } from './actualite/actualite.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  {path: 'mescontacts', component: ContactComponent },
  {path: '' , component: PresentationComponent},
  {path: 'lesact' , component: ActualiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
