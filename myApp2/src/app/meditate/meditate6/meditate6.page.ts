import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meditate6',
  templateUrl: './meditate6.page.html',
  styleUrls: ['./meditate6.page.scss'],
})
export class Meditate6Page implements OnInit {

  constructor( private router: Router) { }

  navigateToPage(){
    this.router.navigate(['tabs/tab1']);
  }

  ngOnInit() {
  }

}
