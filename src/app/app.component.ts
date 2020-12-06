import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserServiceService } from './user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public userDetails = new User()
  public users:User[] = [
    {"name":'Karthik', "password":'Karthiik123'},
    {"name":'Venu', "password":'Venu123'}
  ] 

  public usersFromService:User;

  ngOnInit(){
    this.userService.getDetails().subscribe(data=>{
      this.usersFromService = data
    })
  }

  constructor(private userService: UserServiceService){}

  getAll(){
    console.log(this.usersFromService)
  }

  post(){
    // let newUser = {
    //   name:this.userDetails.name,
    //   password:this.userDetails.password
    // }
    this.userService.postDetails(this.userDetails).subscribe(data=>{
      console.log(data)
    })
  }

  login(){
    for(let i=0; i<this.users.length; i++){
      if(this.userDetails.name === this.users[i].name && this.userDetails.password === this.users[i].password){
        this.userService.changeStatus()
        console.log('User is Valid')
        break
      }
      else{
        
        console.log('Invalid User')
      }
    }
    //console.log(this.userDetails.name, this.userDetails.password)
  }
}
