import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { TestTableComponent } from '../components/test-table/test-table.component';
import { TestDialogComponent } from '../components/test-dialog/test-dialog.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule
  ],
  exports: [
    TableModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule
  ]
})
export class PrimengsModule { }
