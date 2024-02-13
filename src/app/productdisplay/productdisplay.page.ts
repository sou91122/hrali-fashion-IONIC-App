import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActionSheetController, MenuController, ModalController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.page.html',
  styleUrls: ['./productdisplay.page.scss'],
})
export class ProductdisplayPage implements OnInit {

  constructor(public router: Router, private modalCtrl: ModalController, public nav: NavController,
              public actionSheetController: ActionSheetController, public menuCtrl: MenuController) { }

  async sortby() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sort By',
      buttons: [{
        text: 'New',
        icon: 'radio-button-on',
        handler: () => {
          console.log('New clicked');
        }
      }, {
        text: 'Popular',
        icon: 'radio-button-on',
        handler: () => {
          console.log('Popular clicked');
        }
      }, {
        text: 'Price Low To High',
        icon: 'radio-button-on',
        handler: () => {
          console.log('Price Low To High clicked');
        }
      }, {
        text: 'Price High To Low',
        icon: 'radio-button-on',
        handler: () => {
          console.log('Price High To Low clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }

  productlist() {
    this.router.navigateByUrl('/productlist');
  }
  filter() {
    this.router.navigateByUrl('/filter');
    this.closeModal();
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
  productdetails() {
    this.router.navigateByUrl('/productdetails');
    this.closeModal();
  }
  shoppingcart() {
    this.router.navigateByUrl('/shoppingcart');
    this.closeModal();
  }
}
