import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meditate8',
  templateUrl: './meditate8.page.html',
  styleUrls: ['./meditate8.page.scss'],
})
export class Meditate8Page implements OnInit {

  constructor( private router: Router) { }

  navigateToPage(){
    this.router.navigate(['tabs/tab1']);
  }

  ngOnInit() {
  }

}
