import { CanDeactivate } from "@angular/router";
import { StudentRouteComponent } from "./student-route.component";
import { Injectable,NgModule } from "@angular/core";

@Injectable()
export class StudentCanDeactivateService implements CanDeactivate<StudentRouteComponent>{
    canDeactivate(component:StudentRouteComponent):boolean{
        if(component.createStudentForm.touched){
            console.log("call can deactivate");
            return window.confirm('Are you sure to discard the changes ? ');
        }
        return true;

    }
}