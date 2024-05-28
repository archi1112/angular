import { Injectable, signal } from '@angular/core';

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

  // signal are of 2 types : Readable , Writable
    // concept of signal
    private signalCount= signal(0);

    getsignalCount(){
      return this.signalCount();
    }

    incrementSignalCount(){
      // to set a value
      // this.signalCount.set(2);


      //  to update a value using previous value
      this.signalCount.update((prevValue)=>{
        return prevValue +1;
      })
    }


}
