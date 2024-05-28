import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  // using services we can keep the data globally (data which is being shared)
    private count=0;

  getCount(){
    return this.count;
  }

  incrementCount(){
    return this.count=this.count+1; 
  }
}
