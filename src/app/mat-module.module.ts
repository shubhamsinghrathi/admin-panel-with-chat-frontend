import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MatModuleModule { }
