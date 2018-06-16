import { Component, OnInit,Input } from '@angular/core';
import { StudentRoute } from '../student-route/studentroute.model';
import {ActivatedRoute, Router} from '@angular/router';
import { StudentRouteService } from '../student-route/studentroute.service';
@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {

  private _id:number;
  student:StudentRoute;
  students:StudentRoute[];
  constructor(private _route:ActivatedRoute,
              private _studentService:StudentRouteService,
              private _router:Router) { }
 
  ngOnInit() {

  /*  The below code is using snapshot.. Use Snapshot when parameter value doesn't change , only when you read the intial route parameter value
  
  // here "id" we are passing is from app.module.ts - studentInfo/:id
    const sid = +this._route.snapshot.paramMap.get('id'); // angular 4 or above - paramsMap 
   // const id = +this._route.snapshot.params['id']  // angular 2 - params is used
   this.student= this._studentService.getStudentByID(sid);
   */
    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.student=this._studentService.getStudentByID(this._id);
    });
   
  }

  viewNextStudent(){
  //  console.log("students lenght"+this.students['id'].length);
  this._id = this._id+1;
  this._router.navigate(['/StudentInfo',this._id]);

  /* did not work
    if(this._id < this.students.length){
      console.log("view student");
    this._id = this._id+1;
    }
    else{
      this._id=1;
    }  
   
    this._router.navigate(['/StudentInfo',this._id]);
    }
*/
  }

}
