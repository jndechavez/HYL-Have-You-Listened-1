import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article7',
  templateUrl: './article7.page.html',
  styleUrls: ['./article7.page.scss'],
})
export class Article7Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }
  
  navigateToPage(){
    this.router.navigate(['tabs/tab2']);
  }

  ngOnInit() {
  }

}
