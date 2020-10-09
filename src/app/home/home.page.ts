import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  List      : boolean = true;
  Products  : Item[];

  constructor(
    private productService: ItemService
  ) {}

  ngOnInit(){
    this.Products = this.productService.getAllProduct();
  }

  ionViewWillEnter(){
    this.Products = this.productService.getAllProduct();
  }

  toggleBtn()
  {
    if(this.List)
    {
      this.List = false;
    }
    else
    {
      this.List = true;
    }
  }
}