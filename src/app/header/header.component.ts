import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() route = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  changeRoute(route: string): void {
    if (route === 'recipes') {
      this.route.emit('recipes');
    } else {
      this.route.emit('shopping');
    }
  }
}
