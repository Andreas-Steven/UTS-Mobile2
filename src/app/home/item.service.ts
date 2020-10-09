import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  CheckStock = [];

  /** DRAF
   * Product 1: CPU         Intel Core i9 - 10900K          | 3.7 Ghz   | 5.3 Ghz | 10 | 20  |           |         |    |     |             |                            | 8.725.000   | 25 | https://images-na.ssl-images-amazon.com/images/I/61aMmen0cFL._AC_SL1099_.jpg
   * Product 2: CPU         AMD Ryzen Threadripper 3990X    | 2.9 Ghz   | 4.3 Ghz | 64 | 128 |           |         |    |     |             |                            | 136.000.000 | 25 | https://cdn.medcom.id/images/content/2020/02/11/1110859/D0aopZ6k14.jpg
   * Product 3: RAM         Gigabyte Aorus RGB PC35200 DDR4 |           |         |    |     | 4400 Mhz  | 16 GB   |    |     |             |                            | 3.399.000   | 25 | https://www.gigabyte.com/FileUpload/Global/KeyFeature/1563/innergigabyteimages/mainpage.jpg
   * Product 4: RAM         Gigabyte Aorus RGB PC28800 DDR4 |           |         |    |     | 3600 Mhz  | 16 GB   |    |     |             |                            | 1.690.000   | 25 | https://cdn.wccftech.com/wp-content/uploads/2018/09/mainpage.jpg
   * Product 5: Motherboard Asus ROG Zenith II Extreme      |           |         |    |     |           |         |    |     | AMD TRX40   | AMD Ryzen Threadripper     | 14.750.000  | 25 | https://www.bhphotovideo.com/images/images2000x2000/asus_rog_zenith_ii_extreme_1544006.jpg
   * Product 6: Motherboard Asus ROG Maximus XII Extreme    |           |         |    |     |           |         |    |     | Intel Z490  | Intel 10th Gen Processors  | 6.834.000   | 25 | https://images-na.ssl-images-amazon.com/images/I/81BSkDF4ZlL._AC_SL1500_.jpg
   * Product 7: GPU         Asus TUF RTX 3080 OC Edition    |           |         |    |     |           |         |    |     |             |                            | 24.000.000  | 25 | https://www.asus.com/media/global/products/qd2z2fai4rv29irz/P_setting_000_1_90_end_500.png
   * Product 8: GPU         ASUS TUF RTX 3090 OC Edition    |           |         |    |     |           |         |    |     |             |                            | 35.000.000  | 25 | https://www.asus.com/media/global/products/igxxollbqcnhl76a/P_setting_000_1_90_end_500.png
   * 
   * Testing:
   * GPU - Asus RTX 2080 Ti Dual OC Edition 20350000 25 https://images-na.ssl-images-amazon.com/images/I/91bG2qFc7TL._AC_SL1500_.jpg
   */

  private product: Item[] = [
    {
      ID                : '1',
      Type              : 'CPU',
      ImageURL          : 'https://images-na.ssl-images-amazon.com/images/I/61aMmen0cFL._AC_SL1099_.jpg',
      Brand             : 'Intel',
      Model             : 'Core i9 - 10900K',
      Price             : 8725000,
      Stock             : 25,
      BaseClock         : 3.7,
      BoostClock        : 5.3,
      Core              : 10,
      Thread            : 20,
      Speed             : null,
      Size              : null,
      Chipset           : null,
      SupportedProcessor: null,
    },
    {
      ID                : '2',
      Type              : 'CPU',
      ImageURL          : 'https://cdn.medcom.id/images/content/2020/02/11/1110859/D0aopZ6k14.jpg',
      Brand             : 'AMD',
      Model             : 'Ryzen Threadripper 3990X',
      Price             : 136000000,
      Stock             : 25,
      BaseClock         : 2.9,
      BoostClock        : 4.3,
      Core              : 64,
      Thread            : 128,
      Speed             : null,
      Size              : null,
      Chipset           : null,
      SupportedProcessor: null,
    },
    {
      ID                : '3',
      Type              : 'RAM',
      ImageURL          : 'https://www.gigabyte.com/FileUpload/Global/KeyFeature/1563/innergigabyteimages/mainpage.jpg',
      Brand             : 'Gigabyte',
      Model             : 'Aorus RGB PC35200 DDR4',
      Price             : 3399000,
      Stock             : 25,
      BaseClock         : null,
      BoostClock        : null,
      Core              : null,
      Thread            : null,
      Speed             : 4400,
      Size              : 16,
      Chipset           : null,
      SupportedProcessor: null,
    },
    {
      ID                : '4',
      Type              : 'RAM',
      ImageURL          : 'https://cdn.wccftech.com/wp-content/uploads/2018/09/mainpage.jpg',
      Brand             : 'Gigabyte',
      Model             : 'Aorus RGB PC28800 DDR4',
      Price             : 1690000,
      Stock             : 25,
      BaseClock         : null,
      BoostClock        : null,
      Core              : null,
      Thread            : null,
      Speed             : 3600,
      Size              : 16,
      Chipset           : null,
      SupportedProcessor: null,
    },
    {
      ID                : '5',
      Type              : 'Motherboard',
      ImageURL          : 'https://www.bhphotovideo.com/images/images2000x2000/asus_rog_zenith_ii_extreme_1544006.jpg',
      Brand             : 'Asus',
      Model             : 'ROG Zenith II Extreme', 
      Price             : 14750000,
      Stock             : 25,
      BaseClock         : null,
      BoostClock        : null,
      Core              : null,
      Thread            : null,
      Speed             : null,
      Size              : null,
      Chipset           : 'AMD TRX40',
      SupportedProcessor: 'AMD Ryzen Threadripper',
    },
    {
      ID                : '6',
      Type              : 'Motherboard',
      ImageURL          : 'https://images-na.ssl-images-amazon.com/images/I/81BSkDF4ZlL._AC_SL1500_.jpg',
      Brand             : 'Asus',
      Model             : 'ROG Maximus XII Extreme', 
      Price             : 6834000,
      Stock             : 25,
      BaseClock         : null,
      BoostClock        : null,
      Core              : null,
      Thread            : null,
      Speed             : null,
      Size              : null,
      Chipset           : 'Intel Z490',
      SupportedProcessor: 'Intel 10th Gen Processors',
    },
    {
      ID                : '7',
      Type              : 'GPU',
      ImageURL          : 'https://www.asus.com/media/global/products/qd2z2fai4rv29irz/P_setting_000_1_90_end_500.png',
      Brand             : 'Asus',
      Model             : 'TUF RTX 3080 OC Edition', 
      Price             : 24000000,
      Stock             : 25,
      BaseClock         : null,
      BoostClock        : null,
      Core              : null,
      Thread            : null,
      Speed             : null,
      Size              : null,
      Chipset           : null,
      SupportedProcessor: null,
    },
    {
      ID                : '8',
      Type              : 'GPU',
      ImageURL          : 'https://www.asus.com/media/global/products/igxxollbqcnhl76a/P_setting_000_1_90_end_500.png',
      Brand             : 'ASUS',
      Model             : 'TUF RTX 3090 OC Edition', 
      Price             : 35000000,
      Stock             : 25,
      BaseClock         : null,
      BoostClock        : null,
      Core              : null,
      Thread            : null,
      Speed             : null,
      Size              : null,
      Chipset           : null,
      SupportedProcessor: null,
    }
  ];

  constructor() { }

  getAllProduct()
  {
    this.CheckStock = [];
    let i = 0;

    for(let j = 0; j < this.product.length; j++)
    {
      if(this.product[j].Stock > 0)
      {
        this.CheckStock[i] = this.product[j];
        i++
      }
    }

    return [...this.CheckStock];
  }

  getProduct(productId: string) 
  {
    return {...this.product.find(product => {
      return product.ID === productId;
    })};
  }

  AddProduct(Data : Item)
  {
    let DATA = {
      ID                : (parseInt(this.product[this.product.length - 1].ID)+1).toString(),
      Type              : Data['Type'],
      ImageURL          : Data['ImageURL'],
      Brand             : Data['Brand'],
      Model             : Data['Model'],
      Price             : Data['Price'],
      Stock             : Data['Stock'],
      BaseClock         : Data['BaseClock'],
      BoostClock        : Data['BoostClock'],
      Core              : Data['Core'],
      Thread            : Data['Thread'],
      Speed             : Data['Speed'],
      Size              : Data['Size'],
      Chipset           : Data['Chipset'],
      SupportedProcessor: Data['SupportedProcessor'],
    }

    this.product.push(DATA);
  }

  EditProduct(Edit: Item)
  {
    this.product.find(products => {
      if(products.ID == Edit.ID)
      {
        products.ID                 = Edit.ID;
        products.ImageURL           = Edit.ImageURL;
        products.Brand              = Edit.Brand;
        products.Model              = Edit.Model;
        products.Price              = Edit.Price;
        products.Stock              = Edit.Stock;
        products.Type               = Edit.Type;
        products.BaseClock          = Edit.BaseClock;
        products.BoostClock         = Edit.BoostClock;
        products.Core               = Edit.Core;
        products.Thread             = Edit.Thread;
        products.Speed              = Edit.Speed;
        products.Size               = Edit.Size;
        products.Chipset            = Edit.Chipset;
        products.SupportedProcessor = Edit.SupportedProcessor;
      }
    });
  }

  DeleteProduct(ID)
  {
    this.product = this.product.filter(produk => {
      return produk.ID !== ID;
    });
  }
}
