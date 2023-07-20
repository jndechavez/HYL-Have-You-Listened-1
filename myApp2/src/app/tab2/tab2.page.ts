import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private navCtrl: NavController, private router: Router) { }

  navigateToPage(){
    this.router.navigate(['article1']);
  }

  navigateToPage2(){
    this.router.navigate(['article2']);
  }

  navigateToPage3(){
    this.router.navigate(['article3']);
  }

  navigateToPage4(){
    this.router.navigate(['article4']);
  }

  navigateToPage5(){
    this.router.navigate(['article5']);
  }

  navigateToPage6(){
    this.router.navigate(['article6']);
  }

  navigateToPage7(){
    this.router.navigate(['article7']);
  }
  
  ngOnInit(){
    
  }



}


