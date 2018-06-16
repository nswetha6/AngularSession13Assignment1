import { Component, OnInit, Input } from '@angular/core';
import { StudentRoute } from '../student-route/studentroute.model';
import { StudentRouteService } from '../student-route/studentroute.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  studentArray:StudentRoute[];
  @Input() students:StudentRoute[];
  s:StudentRoute;
 // studentArray:StudentRoute[];
  constructor(private _studentService:StudentRouteService) { }

  ngOnInit() {
    console.log(this.students);
   this.students=this._studentService.getFinalStudentList();
  }
  removeStudent(sid:number){
    console.log(sid);
    this._studentService.removeStudentName(sid);
  }
  getStudentInfo(sid:number){
    console.log("anchor click");
    this._studentService.getStudentByID(sid);
    
  }

}
