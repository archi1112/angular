import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  // this means that services can be used anywhere there is no need to import
  providedIn: 'root'
})
export class JokeService {

  constructor( private http:HttpClient) {
   }

   getJoke(){
    return this.http.get("https://api.chucknorris.io/jokes/random?category=movie")
   }

}
