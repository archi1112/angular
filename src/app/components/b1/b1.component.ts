import { Component } from '@angular/core';
import { B2Component } from '../b2/b2.component';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-b1',
  standalone: true,
  // importing B2 component in B1 so that B2 shares instance of B1
  imports: [B2Component],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css'
})
export class B1Component {
constructor(public CounterService : CounterService){};
}
