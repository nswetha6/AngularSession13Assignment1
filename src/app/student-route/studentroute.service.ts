import {StudentRoute} from './studentroute.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentRouteService{
    students:StudentRoute;
    FinalstudentList:StudentRoute[]=[];

    getStudentValues(students){
        return this.FinalstudentList.unshift(students);
    }
    getFinalStudentList(){
        return this.FinalstudentList;
    }
    removeStudentName(sid:number){
        for(var i=0; i<this.FinalstudentList.length;i++){
            if(this.FinalstudentList[i].id == sid){
                console.log("sid --> "+sid);
                console.log("this.FinalstudentList[i].id "+this.FinalstudentList[i].id);
                console.log(this.FinalstudentList[i]);
                this.FinalstudentList.splice(i,1);
                break;
            }
        }
        
    }

    getStudentByID(sid:number){

        return this.FinalstudentList.find(e=> e.id==sid);
        // for(var i=0; i<this.FinalstudentList.length;i++){
        //     if(this.FinalstudentList[i].id == sid){
        //         console.log("list "+ this.FinalstudentList[i]);
        //         return this.FinalstudentList[i];
               
        //     }
        }
      //  return 
    }
