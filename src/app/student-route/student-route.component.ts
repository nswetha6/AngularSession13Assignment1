import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentRoute } from './studentroute.model';
import { Department } from './department.model';
import { DepartmentService } from './department.service';
import { StudentRouteService } from './studentroute.service';

@Component({
  selector: 'app-student-route',
  templateUrl: './student-route.component.html',
  styleUrls: ['./student-route.component.css']
})
export class StudentRouteComponent implements OnInit {

  routeform:FormGroup;
  students:StudentRoute;
  studentArray:StudentRoute[]=[];
  departmentArray:Department[];

  @ViewChild('routeform') public createStudentForm: FormGroup;
  constructor(private _fb:FormBuilder, private _depservice:DepartmentService, private _studentService:StudentRouteService) {
     }

     
  ngOnInit() {
    
     // id= ++this.student.id;

    this.routeform = this._fb.group({   //new FormGroup({
      FirstName : new FormControl('',Validators.required),
      MiddleName: new FormControl(''),
      LastName  : new FormControl(''),
      //,Validators.required),
      Department: new FormControl(''),
      DateOfJoin: new FormControl(new Date())
    })
      this.departmentArray= this._depservice.getDepValues();
      this.studentArray=this._studentService.getFinalStudentList();
  }

  static id:number=0;
  addFormValues(student:StudentRoute){
    this.students={
      id:++StudentRouteComponent.id,
      FirstName : student.FirstName,
      MiddleName: student.MiddleName,
      LastName  : student.LastName,
      Department: student.Department,
      DateOfJoin: student.DateOfJoin
    }
    console.log(this.students);
    this._studentService.getStudentValues(this.students);
    this.studentArray=this._studentService.getFinalStudentList();
    console.log(this.studentArray);
    }
  
  resetform(){
    this.routeform.reset();
  }
}
