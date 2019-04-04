import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

declare var gtag;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );

    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-137514764-1', {
        page_path: event.urlAfterRedirects
      });
    });
  }

  navigateToAbout() {
    this.router.navigateByUrl('/about');
  }

  navigateToAssociation() {
    this.router.navigateByUrl('/');
  }
}
