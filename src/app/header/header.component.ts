import {Component} from '@angular/core';
import {LocalStorageService} from '../shared/services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private localStorageService: LocalStorageService,
              private route: Router) {
  }

  logOut() {
    this.localStorageService.logOut('Guest');
    this.route.navigate(['/core/registration']);
  }
}
