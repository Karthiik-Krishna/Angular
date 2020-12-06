import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserServiceService } from './user-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private myService:UserServiceService,
              private router : Router){}

  canActivate(){
    if(this.myService.loggedIn){
      return true
    }
    else{
      return this.router.navigate(['/view'])
    }
  }
    
  }
  

