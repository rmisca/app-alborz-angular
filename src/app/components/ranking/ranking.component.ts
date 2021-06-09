import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface TeamData {
  position: number;
  teamName: string;
  games: number;
  wins: number;
  draws: number;
  losses: number;
  goalsScored: number;
  goalsReceived: number;
  points: number;
}

export interface TeamHeader {
  display: string;
  value: string;
  sortPosition: number;
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})

export class RankingComponent implements OnInit, AfterViewInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<TeamData>;
  @ViewChild(MatSort) sort: MatSort;
  isLoading = true;
  columns: TeamHeader[];
  constructor(private db: AngularFirestore) {
  }

  ngOnInit(): void {
    this.generateTableHeader();
  }

  ngAfterViewInit(): void {
  }

  generateTableHeader(): void {
    const teamHeader = this.db.collection('team-headers').valueChanges();
    teamHeader.subscribe((data: TeamHeader[]) => {
      this.columns = data.sort((a, b) => a.sortPosition - b.sortPosition);
      this.displayedColumns = this.columns.map(h => h.value);
      this.generateTableData();
    });
  }

  generateTableData(): void {
    const tableData = this.db.collection('team-data').valueChanges();
    tableData.subscribe((data: TeamData[]) => {
      const sortedData = data.sort((a, b) => a.position - b.position);
      this.dataSource = new MatTableDataSource(sortedData);
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
