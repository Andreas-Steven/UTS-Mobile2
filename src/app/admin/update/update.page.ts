import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Item } from '../../home/item.model';
import { ItemService } from '../../home/item.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  LoadedProduct: Item;

  constructor(private itemService : ItemService, private alertController: AlertController, private loadingController: LoadingController, private toastController: ToastController, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('productId')) {return;}
      const productId = paramMap.get('productId');
      this.LoadedProduct = this.itemService.getProduct(productId);
    });
  }
  
  onSubmit() { }

  async PresentAlert() 
  {
    const alert = await this.alertController.create({
      message: 'Are You Sure Want to Edit this Product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: () => this.EditProduct()
        }
      ]
    });

    await alert.present();
  }

  async PresentLoading() 
  {
    const loading = await this.loadingController.create({
      message: 'Editing...',
      duration: 1000
    });
    await loading.present();
    const {role, data} = await loading.onDidDismiss();
  }

  async PresentToast() {
    const toast = await this.toastController.create({
      message: 'Product Has Been Edited',
      duration: 2000,
      color: 'warning'
    });
    await toast.present();
  }

  EditProduct()
  {
    this.PresentLoading().then(() => {
      this.itemService.EditProduct(this.LoadedProduct);
      this.PresentToast();
      this.router.navigate(['./admin']);
    })
  }
}

