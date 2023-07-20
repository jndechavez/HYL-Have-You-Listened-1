import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article4',
  templateUrl: './article4.page.html',
  styleUrls: ['./article4.page.scss'],
})
export class Article4Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }
  
  navigateToPage(){
    this.router.navigate(['tabs/tab2']);
  }

  ngOnInit() {
  }

}
