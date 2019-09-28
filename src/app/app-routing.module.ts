import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';


const routes: Routes = [
  {
    path:'side-bar',component:SideBarComponent
  },
  {
    path:'main-section',component:MainSectionComponent
  },
  {
    path:'footer-bar',component:FooterBarComponent
  },
  { path: '',   redirectTo: '/main-section', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
