import {Department} from './department.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentService{
    depnames:Department[]=[{
        id:1,
        depname:"CSE"
    },
    {
        id:2,
        depname:"ECE"
    },
    {
        id:3,
        depname:"MECH"
    },
    {
        id:4,
        depname:"CIVIL"
    }  
    ]

    getDepValues(){
        return this.depnames;
    }
}