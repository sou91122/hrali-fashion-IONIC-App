import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Cart',
      url: '/shoppingcart',
      icon: 'cart'
    },
    {
      title: 'Wishlist',
      url: '/wishlist',
      icon: 'heart'
    },
    {
      title: 'New Arrival',
      url: '/newarrival',
      icon: 'pricetags'
    },
    {
      title: 'Shop by Brand',
      url: '/brand',
      icon: 'bookmarks'
    },
    {
      title: 'Deals of the Day',
      url: '/deals',
      icon: 'flame'
    },
    {
      title: 'Notification',
      url: 'notification',
      icon: 'notifications'
    },
    {
      title: 'Your Orders',
      url: '/order',
      icon: 'bicycle'
    },
    {
      title: 'Wallet History',
      url: '/wallethistory',
      icon: 'wallet'
    },
    {
      title: 'Transaction History',
      icon: 'repeat'
    },
    {
      title: 'Change Password',
      url: 'changespwd',
      icon: 'lock-closed'
    },
    {
      title: 'Manage Address',
      url: 'address',
      icon: 'build'
    },
    {
      title: 'Refer & Earn',
      url: 'referearn',
      icon: 'person-add'
    },
    {
      title: 'Contact Us',
      url: 'contactus',
      icon: 'call'
    },
    {
      title: 'About Us',
      url: '/about-inner',
      icon: 'information-circle'
    },
    {
      title: 'My Account',
      url: '/tabs/account',
      icon: 'person'
    },
    {
      title: 'Rate Us',
      url: '/rating',
      icon: 'star-outline'
    },
    {
      title: 'Share App',
      url: '/shareapp',
      icon: 'share-social'
    },
        {
      title: '24*7 help',
      url: '/chat',
      icon: 'chatbubbles'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'chatbox-ellipses'
    },
    {
      title: 'Terms & Conditions',
       url: '/terms',
      icon: 'newspaper-outline'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy',
      icon: 'document-text-outline'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    },


    // {
    //   title: 'Settings',
    //   url: '/settings',
    //   icon: 'settings'
    // },
    // {
    //   title: 'Legal',
    //   url: '/legal',
    //   icon: 'warning'
    // },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
