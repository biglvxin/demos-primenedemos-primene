import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengsModule } from './primengs/primengs.module';
import { TestTableComponent } from './components/test-table/test-table.component';
import { TestDialogComponent } from './components/test-dialog/test-dialog.component';





@NgModule({
  declarations: [TestTableComponent, TestDialogComponent],
  imports: [
    CommonModule,
    PrimengsModule,
  ],
  exports: [
    TestTableComponent,
    PrimengsModule
  ]
})
export class SharedModule { }
