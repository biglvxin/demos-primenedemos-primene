import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule,
    AccordionModule,
    CheckboxModule,
    TreeModule
  ],
  exports: [
    TableModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule,
    AccordionModule,
    CheckboxModule,
    TreeModule
  ]
})
export class PrimengsModule { }
