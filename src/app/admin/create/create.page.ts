import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Item } from '../../home/item.model';
import { ItemService } from '../../home/item.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {
  DATA : Item ={
    ID                  : undefined,
    Type                : undefined,
    ImageURL            : undefined,
    Brand               : undefined,
    Model               : undefined,
    Price               : undefined,
    Stock               : undefined,
    BaseClock           : undefined,
    BoostClock          : undefined,
    Core                : undefined,
    Thread              : undefined,
    Speed               : undefined,
    Size                : undefined,
    Chipset             : undefined,
    SupportedProcessor  : undefined,
  };
  
  constructor(private itemService:ItemService, private alertController: AlertController, private loadingController: LoadingController, private toastController: ToastController, private router : Router) { }

  ngOnInit() { }

  async PresentLoading() 
  {
    const loading = await this.loadingController.create({
      message: 'Adding product...',
      duration: 1000
    });

    await loading.present();
    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  async PresentToast() 
  {
    const toast = await this.toastController.create({
      message: 'Product Has been Added',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }

  onSubmit(form : NgForm)
  {
    this.PresentLoading().then(() => 
    {
      this.DATA.ID = '0';
      this.DATA.ImageURL = form.value.imgUrl;
      this.DATA.Brand = form.value.merk;
      this.DATA.Model = form.value.model;
      this.DATA.Price = form.value.price;
      this.DATA.Stock = form.value.stock;
      this.DATA.Type = form.value.productType;

      if(form.value.productType == 'CPU')
      {
        this.DATA.BaseClock = form.value.baseClock;
        this.DATA.BoostClock = form.value.boostClock;
        this.DATA.Core = form.value.core;
        this.DATA.Thread = form.value.thread;
        this.DATA.Speed = 0;
        this.DATA.Size = 0;
        this.DATA.Chipset = '';
        this.DATA.SupportedProcessor = '';
      }
      else if(form.value.productType == 'RAM')
      {
        this.DATA.BaseClock = 0;
        this.DATA.BoostClock = 0;
        this.DATA.Core = 0;
        this.DATA.Thread = 0;
        this.DATA.Speed = form.value.speed;
        this.DATA.Size = form.value.size;
        this.DATA.Chipset = '';
        this.DATA.SupportedProcessor = '';
      }
      else if(form.value.productType == 'Motherboard')
      {
        this.DATA.BaseClock = 0;
        this.DATA.BoostClock = 0;
        this.DATA.Core = 0;
        this.DATA.Thread = 0;
        this.DATA.Speed = 0;
        this.DATA.Size = 0;
        this.DATA.Chipset = form.value.chipset;
        this.DATA.SupportedProcessor = form.value.support;
      }
      else if(form.value.productType == 'GPU')
      {
        this.DATA.BaseClock = 0;
        this.DATA.BoostClock = 0;
        this.DATA.Core = 0;
        this.DATA.Thread = 0;
        this.DATA.Speed = 0;
        this.DATA.Size = 0;
        this.DATA.Chipset = '';
        this.DATA.SupportedProcessor = '';
      }
      
      this.itemService.AddProduct(this.DATA);
      this.PresentToast();
      
      this.router.navigate(['./admin']);
    });
    
  }
}