import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuController, ModalController, NavController} from '@ionic/angular';
@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {

  constructor(public router: Router, private modalCtrl: ModalController, public nav: NavController, public menuCtrl: MenuController)

{ }

  ngOnInit() {
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
