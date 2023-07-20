import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article5',
  templateUrl: './article5.page.html',
  styleUrls: ['./article5.page.scss'],
})
export class Article5Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }
  
  navigateToPage(){
    this.router.navigate(['tabs/tab2']);
  }
  ngOnInit() {
  }

}
