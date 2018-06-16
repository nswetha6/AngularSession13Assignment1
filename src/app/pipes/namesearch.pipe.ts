import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesearch'
})
export class NamesearchPipe implements PipeTransform {

  transform(value: any, searchterm?: any[]): any {
    console.log("Value "+ value);
    console.log("term"+ searchterm);
    if(searchterm==undefined){
    return value;
    }
    else{
      var sterm= value.filter((item)=>item.FirstName.startsWith(searchterm));
      return sterm;
    }
  }

}
