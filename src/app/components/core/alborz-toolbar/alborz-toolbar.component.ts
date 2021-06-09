import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-alborz-toolbar',
  templateUrl: './alborz-toolbar.component.html',
  styleUrls: ['./alborz-toolbar.component.scss']
})
export class AlborzToolbarComponent implements OnInit {

  constructor() { }

  @Input() color: string ;
  @Output() toggleSidenav = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitToggleSidenav(): any {
    this.toggleSidenav.emit();
  }
}

