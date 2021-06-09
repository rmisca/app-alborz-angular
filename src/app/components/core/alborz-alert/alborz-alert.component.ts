import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'app-alborz-alert',
  templateUrl: './alborz-alert.component.html',
  styleUrls: ['./alborz-alert.component.scss'],
})
export class AlborzAlertComponent {
  durationInSeconds = 5;

  constructor(private alborzAlertBar: MatSnackBar) {}

  openAlertBar() {
    this.alborzAlertBar.openFromComponent(AlborzAlertMessageComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}


@Component({
  selector: 'app-alborz-alert-bar-component',
  template: `<span class="example-pizza-party">
               Pizza party!!! 🍕
              </span>`,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class AlborzAlertMessageComponent {}

