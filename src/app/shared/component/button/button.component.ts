import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onClick(url: string) {
    this.router.navigate([url]);
  }
}
