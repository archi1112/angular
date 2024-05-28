import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JokeComponent } from './joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , UserProfileComponent , JokeComponent , AComponent , B1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

