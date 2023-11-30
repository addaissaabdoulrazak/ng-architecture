import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.action';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  adda$ : Observable<number> | null = null;

  constructor(private store : Store<{count: number}>) { 
    
    this.adda$ = store.select('count')
  }

  ngOnInit(): void {
  }


  increment(){ 
      this.store.dispatch(increment());
  }

  decrement(){
     this.store.dispatch(decrement());
  }

  reset(){
   this.store.dispatch(reset());
  }
}
