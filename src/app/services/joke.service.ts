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
    this.http.get("https://v2.jokeapi.dev/joke/Programming").subscribe(data =>{
      console.log(data);
    });
   }

}
