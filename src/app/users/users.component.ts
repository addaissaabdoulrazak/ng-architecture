import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

 users : any =[]

  constructor(private dataService : DataService) { }

  ngOnInit(): void {

    this.dataService.getUsers().subscribe(data =>{

      console.log( data);  

      this.users = data.users
      
    })
  }

}
