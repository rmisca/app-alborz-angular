import { Component, OnInit } from '@angular/core';
import {faRunning} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() { }
  faRunning = faRunning;
  ngOnInit(): void {
  }

}
