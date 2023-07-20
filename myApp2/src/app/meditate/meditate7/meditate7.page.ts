import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meditate7',
  templateUrl: './meditate7.page.html',
  styleUrls: ['./meditate7.page.scss'],
})
export class Meditate7Page implements OnInit {

  constructor( private router: Router) { }

  navigateToPage(){
    this.router.navigate(['tabs/tab1']);
  }

  ngOnInit() {
  }

}