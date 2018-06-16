import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import {FormsModule,FormGroup,ReactiveFormsModule} from '@angular/forms';
import {Route,Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { StudentRouteComponent } from './student-route/student-route.component';
import { DepartmentService } from './student-route/department.service';
import { StudentRouteService } from './student-route/studentroute.service';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { StudentCanDeactivateService } from './student-route/studentCanDeactivate.service';
import { NamesearchPipe } from './pipes/namesearch.pipe';


const appRoutes: Routes =[
  {path:'AddStudent', 
    component: StudentRouteComponent,
    //canDeactivate:[StudentCanDeactivateService] 
  },
  {path:'StudentsList', component: StudentlistComponent },
  {path:'StudentInfo', component: StudentinfoComponent },
  //{path:'StudentsList/:FirstName', component: StudentinfoComponent },
   {path:'StudentInfo/:id', component: StudentinfoComponent },
  {path:'', redirectTo:'/AddStudent', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    StudentRouteComponent,
    StudentlistComponent,
    PageNotFoundComponent,
    StudentinfoComponent,
    NamesearchPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentCanDeactivateService, DepartmentService,StudentRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
