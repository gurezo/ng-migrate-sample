import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor(private router: Router) {
    this.title = '';
    this.url = '';
  }

  @Input() title: string;
  @Input() url: string;

  ngOnInit() {}

  onClick() {
    this.router.navigate([this.url]);
  }
}
