import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {
  slidefirst = {
    initialSlide: 0,
    speed: 1400,
    slidesPerView: 1,
    spaceBetween: 8,
    slideShadows: true,
    autoplay: true,
  };
  slidenew = {
    initialSlide: 0,
    speed: 1500,
    slidesPerView: 1.7,
    spaceBetween: 8,
    slideShadows: true,
    autoplay: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
