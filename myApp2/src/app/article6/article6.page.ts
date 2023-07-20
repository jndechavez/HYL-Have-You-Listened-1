import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article6',
  templateUrl: './article6.page.html',
  styleUrls: ['./article6.page.scss'],
})
export class Article6Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }
  
  navigateToPage(){
    this.router.navigate(['tabs/tab2']);
  }
  ngOnInit() {
  }

}
