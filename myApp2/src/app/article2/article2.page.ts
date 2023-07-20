import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article2',
  templateUrl: './article2.page.html',
  styleUrls: ['./article2.page.scss'],
})
export class Article2Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }
  
  navigateToPage(){
    this.router.navigate(['tabs/tab2']);
  }
  ngOnInit() {
  }

}
