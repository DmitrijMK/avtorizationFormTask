import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../shared/services/local-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userName = 'Guest';

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    if (this.localStorageService.getUserName()) {
      this.userName = this.localStorageService.getUserName();
    }
    console.log(this.localStorageService.getUserName());
    this.localStorageService.dataSource$.subscribe(value => this.userName = value);
  }
}
