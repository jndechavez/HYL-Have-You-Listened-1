import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  navigateToPage(){
    this.router.navigate(['tabs/tab1']);
  } 
  
  ngOnInit(){
    
  }



}
