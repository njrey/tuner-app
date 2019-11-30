import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentListComponentComponent } from './instrument-list-component/instrument-list-component.component';
import { InstrumentDetailComponent } from './instrument-detail/instrument-detail.component'


const routes: Routes = [
  {path: 'instruments', component: InstrumentListComponentComponent},
  {path: 'instruments/:name', component: InstrumentDetailComponent},
  { 
    path: '',
    redirectTo: '/instruments',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
