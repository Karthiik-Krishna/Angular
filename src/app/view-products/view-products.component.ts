import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Products } from '../products';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
// export class MyComponent implements AfterViewInit{
//   public dataFromChild = ''
//   @ViewChild(ChildComponent,{static:false}) child
//   ngAfterViewInit(){
//     this.dataFromChild = this.child.data
//   }
// }

export class ViewProductsComponent implements OnInit {

  public name : 'Hello World'

  public productList : Products

  constructor(private myService: UserServiceService) { }

  ngOnInit(): void {
    this.myService.getProducts().subscribe(data=>{
      this.productList = data
    })
  }

}
