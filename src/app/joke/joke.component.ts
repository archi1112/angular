import { Component } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

  joke="loading"
  constructor(private jokeService:JokeService ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAnotherJoke()
    
  }

  getAnotherJoke(){
    this.jokeService.getJoke().subscribe((data:any) =>{
      this.joke = data.value
    })
  }
}
