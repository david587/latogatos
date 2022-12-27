// <!--
// File: table.ts
// Author: Baráth Dávid
// Copyright: 2022, Baráth Dávid
// Group: Szoft 2 N
// Date: 2022.12.27
// Github: https://github.com/david587/
// Licenc: GNU GPL
// -->
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  addresses: any[] = [
    {nev: "Székesfehérvár	", megye: "Fejér", Terulet: "170.89km", Nepesseg:"95545"},
    {nev: "Szombathely	", megye: "Vas", Terulet: "97,5 km", Nepesseg:"2134"},
    {nev: "Sopron	", megye: "Győr-Moson-Sopron", Terulet: "120.89km", Nepesseg:"3544"},
    {nev: "Zalaegerszeg	", megye: "Zala", Terulet: "70.89km", Nepesseg:"34545"},
    {nev: "Sárvár	", megye: "Vas", Terulet: "98.9km", Nepesseg:"9545"},
    {nev: "Lenti	", megye: "Zala", Terulet: "23.8km", Nepesseg:"8545"},
    {nev: "Zalakaros	", megye: "Zala", Terulet: "10.89km", Nepesseg:"545"}
  ];
}
