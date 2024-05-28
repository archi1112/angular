import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  providers:[CounterService],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

  constructor (private countService : CounterService){}

  getCount(){
   return this.countService.getCount();
  }

  increaseCount(){
    return this.countService.incrementCount();
  }

}
