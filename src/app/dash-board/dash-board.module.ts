import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager/manager.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'manager', component: ManagerComponent},
]
@NgModule({
  declarations: [
    ManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashBoardModule { }
