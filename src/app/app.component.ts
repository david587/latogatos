// <!--
// File: app.ts
// Author: Baráth Dávid
// Copyright: 2022, Baráth Dávid
// Group: Szoft 2 N
// Date: 2022.12.27
// Github: https://github.com/david587/
// Licenc: GNU GPL
// -->
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latogatni';
  about : string="Baráth Dávid, Szoft 2 N, 2022.12.27";
}
