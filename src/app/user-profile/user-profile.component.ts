import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "sanjay";
  age=28
  salary=45000
defaultInputVal:any="45"

// function for event on input attribute
  onChange(e : Event){
    const value=(e.target as HTMLInputElement).value
    //    topic-3  updating value back from input attribute
    this.defaultInputVal=value
  }
  
}
