import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public id;
  public product = new Products()

  constructor(private _myService: UserServiceService,
              private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(data=>{
      this.id = data.id
      this._myService.getProductById(parseInt(this.id)).subscribe(data=>{
        this.product = data
      })
    })
  }
  updateProduct(){
    this._myService.postProductById(this.id, this.product).subscribe(data=>{
      console.log(data)
    })
  }

}
