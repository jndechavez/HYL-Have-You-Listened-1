import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meditate5',
  templateUrl: './meditate5.page.html',
  styleUrls: ['./meditate5.page.scss'],
})
export class Meditate5Page implements OnInit {

  constructor( private router: Router) { }

  navigateToPage(){
    this.router.navigate(['tabs/tab1']);
  }

  ngOnInit() {
  }

}