import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuController, ModalController, NavController} from '@ionic/angular';
import {ProductdisplayPage} from '../productdisplay/productdisplay.page';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  filterList: string = 'price';
  priceRange: any = { lower: 175, upper: 350 };
  public brand = [
    { val: 'Ananbolic design', isChecked: false },
    { val: 'Bonafide', isChecked: false },
    { val: 'Carnivor', isChecked: false },
    { val: 'Body Nutrition', isChecked: false },
    { val: 'Nutrabio', isChecked: false },
    { val: 'Pescience', isChecked: false },
    { val: 'Gardenia', isChecked: false },
    { val: 'LabTech', isChecked: false },
    { val: 'Repp Sports', isChecked: false },
    { val: 'MHP', isChecked: false },
    { val: 'Vitacore', isChecked: false },
    { val: 'Outbreak', isChecked: false },
    { val: 'EFX', isChecked: false },
    { val: 'Dymatize', isChecked: false },
    { val: 'Nutrakey', isChecked: false },
    { val: 'GAT Sports', isChecked: false },
    { val: 'Condemened', isChecked: false },
    { val: 'Juggernaut Nutrition', isChecked: false }
  ];
  public color = [
    { val: 'Black', isChecked: false },
    { val: 'Blue', isChecked: false },
    { val: 'Green', isChecked: false },
    { val: 'Yellow', isChecked: false },
    { val: 'White', isChecked: false },
    { val: 'Pink', isChecked: false },
    { val: 'Grey', isChecked: false },
    { val: 'Lime', isChecked: false },
    { val: 'Navy Blue', isChecked: false },
    { val: 'Apricot', isChecked: false },
    { val: 'Printed', isChecked: false }
  ];
  public size = [
    { val: 'S', isChecked: false },
    { val: 'M', isChecked: false },
    { val: 'L', isChecked: false },
    { val: 'XL', isChecked: false },
    { val: 'XXL', isChecked: false },
    { val: 'XXXL', isChecked: false }
  ];
  public discount = [
    { val: 'Less than 10%', isChecked: false },
    { val: '10% or more', isChecked: false },
    { val: '20% or more', isChecked: false },
    { val: '30% or more', isChecked: false },
    { val: '40% or more', isChecked: false },
    { val: '50% or more', isChecked: false },
    { val: '60% or more', isChecked: false }
  ];
  constructor(public router: Router, public modalController: ModalController, public nav: NavController,
              public activateroute: ActivatedRoute, public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }
  productdisplay() {
    this.productdisplayModal();
    this.router.navigateByUrl('/' + window.localStorage.getItem( 'pageLink'));
  }
  async productdisplayModal() {
    const modal = await this.modalController.create({
      component: ProductdisplayPage
    });
    return await modal.present();
  }

}
