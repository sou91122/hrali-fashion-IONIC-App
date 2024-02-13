import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {GuestPage} from '../guest/guest.page';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.page.html',
  styleUrls: ['./shoppingcart.page.scss'],
})
// export class ShoppingcartPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



// export class ShoppingcartPage implements OnInit {
//   qty = 1;
//   constructor(public router: Router, public modalController: ModalController){ }
//   async guest() {
//     const modal = await this.modalController.create({
//       component: GuestPage,
//       cssClass: 'guest'
//     });
//     return await modal.present();
//   }

//   ngOnInit() {
//   }
//   IncreaseQty() {
//     this.qty++;
//   }

//   DecreaseQty() {
//     if (this.qty > 1) {
//       this.qty--;
//     }
//   }
//   wishlist() {
//     this.router.navigateByUrl('/wishlist');
//   }
//   home() {
//     this.router.navigateByUrl('/home');
//   }
// }

export class ShoppingcartPage implements OnInit {
  qty = 1;
  constructor(public router: Router, public modalController: ModalController){ }
  async guest() {
    const modal = await this.modalController.create({
      component: GuestPage,
      cssClass: 'guest'
    });
    return await modal.present();
  }
  ngOnInit() {
  }
  IncreaseQty() {
    this.qty++;
  }
  DecreaseQty() {
    if (this.qty > 1) {
      this.qty--;
    }
  }
}