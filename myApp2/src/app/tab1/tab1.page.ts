import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private navCtrl: NavController, private router: Router) { }

  navigateToPage(){
    this.router.navigate(['meditate1']);
  }

  navigateToPage2(){
    this.router.navigate(['meditate2']);
  }

  navigateToPage3(){
    this.router.navigate(['meditate3']);
  }

  navigateToPage4(){
    this.router.navigate(['meditate4']);
  }

  navigateToPage5(){
    this.router.navigate(['meditate5']);
  }

  navigateToPage6(){
    this.router.navigate(['meditate6']);
  }

  navigateToPage7(){
    this.router.navigate(['meditate7']);
  }

  navigateToPage8(){
    this.router.navigate(['meditate8']);
  }
  
  ngOnInit(){
    
  }



}

