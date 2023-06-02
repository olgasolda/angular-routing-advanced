import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminHomeComponent,
    ManagePhrasesComponent,
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
