import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meditate3',
  templateUrl: './meditate3.page.html',
  styleUrls: ['./meditate3.page.scss'],
})
export class Meditate3Page implements OnInit {

  constructor( private router: Router) { }

  navigateToPage(){
    this.router.navigate(['tabs/tab1']);
  }

  ngOnInit() {
  }

}
