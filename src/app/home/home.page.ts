import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slidefirst = {
    initialSlide: 0,
    speed: 700,
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
  slideBrand = {
    initialSlide: 0,
    speed: 1500,
    autoplay: true,
    slidesPerView: 4,
    spaceBetween: 8,
  };
  arrived = {
    initialSlide: 0,
    speed: 1500,
    slidesPerView: 2.3,
    spaceBetween: 4,
    slideShadows: true,
    autoplay: true,
  };
  constructor() {}

}
