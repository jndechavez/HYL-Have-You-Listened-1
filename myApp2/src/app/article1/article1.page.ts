import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.page.html',
  styleUrls: ['./article1.page.scss'],
})
export class Article1Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }
  
  navigateToPage(){
    this.router.navigate(['tabs/tab2']);
  }
  ngOnInit() {
  }

}
