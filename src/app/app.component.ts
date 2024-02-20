import { Component } from '@angular/core';
import * as xlsx from 'xlsx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excel';

  constructor(){

  }

  downloadExcel(){
    const Heading = [['A1']];
    const wb = xlsx.utils.book_new();
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet([]);
    xlsx.utils.sheet_add_aoa(ws, Heading);
    xlsx.utils.sheet_add_aoa(ws, [['Hello world']], {origin:-1});
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'excelText.xlsx');

  }
}
