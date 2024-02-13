import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {AddresspopComponent} from '../addresspop/addresspop.component';

@Component({
  selector: 'app-addressnew',
  templateUrl: './addressnew.page.html',
  styleUrls: ['./addressnew.page.scss'],
})
export class AddressnewPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async menu(ev: any) {
    const popover = await this.popoverController.create({
      component: AddresspopComponent,
      cssClass: 'addressedit',
      event: ev,
      translucent: true,
      mode: 'md'
    });
    return await popover.present();
  }

}
