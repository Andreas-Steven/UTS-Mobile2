import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Item } from '../home/item.model';
import { ItemService } from '../home/item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  Products: Item[];

  constructor(private itemService: ItemService, private alertController: AlertController, private loadingController: LoadingController, private toastController: ToastController, private router : Router) { }

  ngOnInit() {
    this.Products = this.itemService.getAllProduct();
  }

  ionViewWillEnter() {
    this.Products = this.itemService.getAllProduct();
  }

  async PresentAlert(ID) 
  {
    const alert = await this.alertController.create({
      message: 'Are You Sure Want to Delete this Product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: () => this.DeleteProduct(ID)
        }
      ]
    });

    await alert.present();
  }

  async PresentLoading() 
  {
    const loading = await this.loadingController.create({
      message: 'Deleting...',
      duration: 1000
    });
    
    await loading.present();
    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  async PresentToast() 
  {
    const toast = await this.toastController.create({
      message: 'Product Has Been Deleted',
      duration: 2000,
      color: 'danger'
    });
    await toast.present();
  }

  DeleteProduct(ID)
  {
    this.PresentLoading().then(() => {
      this.itemService.DeleteProduct(ID);
      this.ionViewWillEnter();
      this.PresentToast()
    })
  }

  EditProduct(ID)
  {
    this.router.navigate(['./admin',ID]);
  }
}
