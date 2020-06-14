import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengsModule } from './primengs/primengs.module';
import { TestTableComponent } from './components/test-table/test-table.component';
import { TestDialogComponent } from './components/test-dialog/test-dialog.component';
import { TestAccordionComponent } from './components/test-accordion/test-accordion.component';





@NgModule({
  declarations: [TestTableComponent, TestDialogComponent, TestAccordionComponent],
  imports: [
    CommonModule,
    PrimengsModule,
  ],
  exports: [
    PrimengsModule,
    TestTableComponent,
    TestDialogComponent
  ]
})
export class SharedModule { }
