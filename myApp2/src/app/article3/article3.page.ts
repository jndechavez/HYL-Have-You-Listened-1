import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article3',
  templateUrl: './article3.page.html',
  styleUrls: ['./article3.page.scss'],
})
export class Article3Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }
  
  navigateToPage(){
    this.router.navigate(['tabs/tab2']);
  }
  ngOnInit() {
  }

}
