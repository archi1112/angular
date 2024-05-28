import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-signal-count-button',
  standalone: true,
  imports: [],
  templateUrl: './signal-count-button.component.html',
  styleUrl: './signal-count-button.component.css'
})
export class SignalCountButtonComponent {

  constructor(public CounterService : CounterService){}
}
