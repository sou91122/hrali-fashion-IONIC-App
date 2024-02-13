import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-addresspop',
  templateUrl: './addresspop.component.html',
  styleUrls: ['./addresspop.component.scss'],
})
export class AddresspopComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}
  dismiss() {
    this.popoverController.dismiss();
  }
}
