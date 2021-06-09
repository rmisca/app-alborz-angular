import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './components/ranking/ranking.component';
import { StageProgramsComponent} from '@app/stage-programs/stage-programs.component';
import {ContactComponent} from '@app/components/contact/contact.component';
import {AddPlayerComponent} from '@app/components/add-player/add-player.component';
import {AddTeamComponent} from '@app/components/add-team/add-team.component';

const routes: Routes = [
  { path: 'clasamente', component: RankingComponent },
  { path: 'program-etape', component: StageProgramsComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'adauga-jucator', component: AddPlayerComponent},
  { path: 'adauga-echipa', component: AddTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
