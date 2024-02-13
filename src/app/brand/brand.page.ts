import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ProductdisplayPage} from '../productdisplay/productdisplay.page';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.page.html',
  styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {
  brand: any;
  constructor(public router: Router, public modalController: ModalController) {
    this.brand = [
      {BrandName: 'Ananbolic design', image: 'brand-logo-1.jpg'},
      {BrandName: 'Bonafide', image: 'brand-logo-2.jpg'},
      {BrandName: 'Carnivor', image: 'brand-logo-3.jpg'},
      {BrandName: 'Body Nutrition', image: 'brand-logo-4.jpg'},
      {BrandName: 'Nutrabio', image: 'brand-logo-5.jpg'},
      {BrandName: 'Pescience', image: 'brand-logo-6.jpg'},
      {BrandName: 'Gardenia', image: 'brand-logo-7.jpg'},
      {BrandName: 'LabTech', image: 'brand-logo-8.jpg'},
      {BrandName: 'Repp Sports', image: 'brand-logo-9.jpg'},
      {BrandName: 'MHP', image: 'brand-logo-10.jpg'},
      {BrandName: 'Vitacore', image: 'brand-logo-11.jpg'},
      {BrandName: 'Outbreak', image: 'brand-logo-12.jpg'},
      {BrandName: 'EFX', image: 'brand-logo-13.jpg'},
      {BrandName: 'Dymatize', image: 'brand-logo-14.jpg'},
      {BrandName: 'Nutrakey', image: 'brand-logo-15.jpg'},
      {BrandName: 'GAT Sports', image: 'brand-logo-16.jpg'},
      {BrandName: 'Condemened', image: 'brand-logo-17.jpg'},
      {BrandName: 'Juggernaut Nutrition', image: 'brand-logo-18.jpg'},
      {BrandName: 'Platinum Lab', image: 'brand-logo-19.jpg'},
      {BrandName: 'Skull Smash', image: 'brand-logo-20.jpg'},
    ];
    window.localStorage.setItem( 'pageLink', 'brand');
  }

  ngOnInit() {
  }
  home() {
    this.router.navigateByUrl('/home');
  }
  async productdisplay() {
    const modal = await this.modalController.create({
      component: ProductdisplayPage
    });
    return await modal.present();
  }
}
