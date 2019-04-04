import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import {
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatMenuModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule
  ]
})
export class MaterialModule {}
