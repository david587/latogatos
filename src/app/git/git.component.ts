// <!--
// File: git.ts
// Author: Baráth Dávid
// Copyright: 2022, Baráth Dávid
// Group: Szoft 2 N
// Date: 2022.12.27
// Github: https://github.com/david587/
// Licenc: GNU GPL
// -->
import { Component } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent {
  name = "latogatni"
  version = "0.0.1"
  owner="baráth dávid"
  group="szoft2N"
  date="2022.12.27"
}
