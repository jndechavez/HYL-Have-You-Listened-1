import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meditate2',
  templateUrl: './meditate2.page.html',
  styleUrls: ['./meditate2.page.scss'],
})
export class Meditate2Page implements OnInit {

  constructor( private router: Router) { }

  navigateToPage(){
    this.router.navigate(['tabs/tab1']);
  }

  ngOnInit() {
  }

}
