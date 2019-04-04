import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { Association } from '../models/association.model';

import { AssociationsService } from '../services/associations.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {
  aboutRoute = './about';

  associationsData: Array<Association>;
  displayedColumns: string[] = ['nipc', 'name', 'location'];
  dataSource: any;
  randomAssociationPosition: Number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private associationsService: AssociationsService) {}

  ngOnInit() {
    this.associationsService.getAssociations().subscribe(response => {
      const associations = response.associations.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      this.associationsData = associations;

      this.dataSource = new MatTableDataSource(associations);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.setRandomAssociation();
    });
  }

  setRandomAssociation(): any {
    this.randomAssociationPosition = Math.floor(
      Math.random() * Math.floor(this.associationsData.length)
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
