import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  user$ : any;

  ngOnInit() {
  this.user$ = this.http.get(`${environment.API_ROOT}/api/users`).pipe(
      map((response: any) => response)
    );
  }
  
  constructor(
    private readonly http: HttpClient,
  ) {}
  
}

