import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthenticationGuard } from './authentication.guard';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { GetAllArchiveNotesComponent } from './components/get-all-archive-notes/get-all-archive-notes.component';
import { GetAllTrashNotesComponent } from './components/get-all-trash-notes/get-all-trash-notes.component';

const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch: 'full'},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'forgotpassword',component:ForgotpasswordComponent},
  {path: 'resetpassword/:token',component:ResetpasswordComponent},
  {path: 'dashboard', component:DashboardComponent,canActivate:[AuthenticationGuard],
       children:[
         {path: '', redirectTo: "notes", pathMatch: 'full' },
         {path: 'notes',component:GetAllNotesComponent},
         {path: 'display', component:DisplayNotesComponent},
         {path: 'archiveNotes', component:GetAllArchiveNotesComponent},
         {path: 'trashNotes', component:GetAllTrashNotesComponent}
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
