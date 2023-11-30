import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {tap, map} from 'rxjs/operators'

const usersUrl = 'https://jsonplaceholder.typicode.com/users' 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }


  getUsers(){

    return this.http.get(usersUrl).pipe(
      
      // tap(data => console.log("from service", data)),

      tap(data => {
      
       data= this.http.get('https://jsonplaceholder.typicode.com/users' )
      
       return{users : data}

      }),
        map(response => {

        return { users : response }
      }))
  }
}
