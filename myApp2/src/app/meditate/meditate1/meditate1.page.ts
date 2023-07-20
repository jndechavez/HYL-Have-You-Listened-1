import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meditate1',
  templateUrl: './meditate1.page.html',
  styleUrls: ['./meditate1.page.scss'],
})
export class Meditate1Page implements OnInit {

  constructor( private router: Router) { }

  navigateToPage(){
    this.router.navigate(['tabs/tab1']);
  }

  ngOnInit() {
  }

}
