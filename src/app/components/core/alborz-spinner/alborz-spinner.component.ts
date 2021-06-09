import {Component, Input, OnInit} from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-alborz-spinner',
  templateUrl: './alborz-spinner.component.html',
  styleUrls: ['./alborz-spinner.component.scss']
})
export class AlborzSpinnerComponent implements OnInit {

  constructor() { }
  @Input() color: ThemePalette;
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  ngOnInit(): void {
  }

}
