import {Component, OnInit, ViewChild} from '@angular/core';
import {AddTeamService} from '@app/shared/add-team.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  league = ['1', '2', '3', '4'];
  teamPlayers = ['Mora Mura', 'Valentino', 'LaLunamia', 'Green Eilin'];
  form = new FormGroup({
    teamName: new FormControl(''),
    teamColors: new FormControl(''),
    teamDelegates: new FormControl(''),
    teamCoaches: new FormControl(''),
    league: new FormControl(''),
    players: new FormControl(''),
  });
  showSpinner = false;
  constructor(private addTeamService: AddTeamService) {
  }
  @ViewChild('appAlert') alborzAlert;
  @ViewChild('appSpinner') alborzSpinner;
  ngOnInit(): void {
  }

  onSubmit() {

    fetch('https://robohash.org/test')
      .then(resp => {
      console.log(resp)
    })


    const data = this.form.value;
    console.log(1);
    this.showSpinner = true;

    this.addTeamService.createTeams(data)
      .then(res => {
        console.log(3)
        this.alborzAlert.openAlertBar();
        this.showSpinner = false;
      });
  }
}
