import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './account/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlborzToolbarComponent } from './components/core/alborz-toolbar/alborz-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { SidenavComponent } from './components/core/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { RankingComponent } from './components/ranking/ranking.component';
import { StageProgramsComponent } from './stage-programs/stage-programs.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ContactComponent } from './components/contact/contact.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import {MatSelectModule} from '@angular/material/select';
import {AddTeamService} from '@app/shared/add-team.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AlborzAlertComponent} from './components/core/alborz-alert/alborz-alert.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AlborzSpinnerComponent } from './components/core/alborz-spinner/alborz-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexModule} from '@angular/flex-layout';

const firebaseConfig = {
  apiKey: 'AIzaSyDN7YacNQK1wL-SgHfewN9DyreJ9T22zA0',
  authDomain: 'angular-alborz-app.firebaseapp.com',
  databaseURL: 'https://angular-alborz-app.firebaseio.com',
  projectId: 'angular-alborz-app',
  storageBucket: 'angular-alborz-app.appspot.com',
  messagingSenderId: '1088116900981',
  appId: '1:1088116900981:web:cfce94c995ad01ff04e43c',
  measurementId: 'G-CSGW84VWYY'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlborzToolbarComponent,
    SidenavComponent,
    RankingComponent,
    StageProgramsComponent,
    ContactComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AlborzAlertComponent,
    AlborzSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    FontAwesomeModule,
    MatSnackBarModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    FlexModule,
    // AngularFireAuthModule,
    // AngularFireStorageModule
  ],
  providers: [AddTeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
