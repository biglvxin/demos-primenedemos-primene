import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule
  ],
  exports: [
    TableModule,
    DropdownModule,
    MultiSelectModule
  ]
})
export class PrimengsModule { }
