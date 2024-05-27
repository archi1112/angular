import { Component, Input, Output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountrycodePipe } from '../pipes/countrycode.pipe';
import { HighlightDirective } from '../directives/highlight.directive';


function formatName(value:string){
  return "Hi" +  value 
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule , CountrycodePipe , HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {

  //    topic 4   :  accepting values passed from parent to child
  // @input decorator is used to take value for parent ; tranform transforms the value acc to the function
  @Input({alias:"userName" , transform:formatName }) name = " "

  // name = 'sanjay';
  age = 28;
  salary = 45000;
  phoneno:number=6453567;
  defaultInputVal: any = '45';
  users = [
    { name: 'hardy', age: 27, salary: 65000 },
    { name: 'mahip', age: 27, salary: 6509000 },
    { name: 'amit', age: 27, salary: 600 },
  ];

  // function for event on input attribute
  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    //    topic-3  updating value back from input attribute
    this.defaultInputVal = value;
  }
}
