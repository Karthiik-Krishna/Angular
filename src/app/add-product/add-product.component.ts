import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public products = new Products()

  constructor(private myService : UserServiceService) { }

  ngOnInit(): void {

  }

  addProduct(){
    this.myService.postProducts(this.products).subscribe(data=>{
      console.log(data)
    })
  }

}
