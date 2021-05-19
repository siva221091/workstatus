import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'  
import * as xlsx from 'xlsx';
declare const myTest:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef | any;
  title = 'Workstatus';
  fileName= 'ExcelSheet.xlsx'; 
  workstatusForm: FormGroup|any;  
  workstatus: FormArray|any;
  click:boolean=false;
 
 

  constructor(private fb:FormBuilder) {  
     
    this.workstatusForm = this.fb.group({  
      
      workstatus: this.fb.array([]) ,  
    });  
  }  
  ngOnInit() {
   
  }
    
  works() : FormArray {  
    return this.workstatusForm.get("workstatus") as FormArray 
   }  
     
  newRow(): FormGroup {  
    return this.fb.group({  
      sno: '',  
      developer: '',  
      title: '',      
      date: '',  
      hours: '', 
      status: '',  
      assignee: '', 
      reporter: '',  
      defects: '', 
      descriptions: '',
    })  
  }  
  addRow() {  
    this.works().push(this.newRow()); 
    this.click=!this.click; 
  }  
     
  removeRow(i:number) {  
    this.works().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.workstatusForm.value); 

  }  
  save()
  {
   myTest();
  }
  next()
  {

  }
 
  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('show'); 
       const ws: xlsx.WorkSheet =xlsx.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: xlsx.WorkBook = xlsx.utils.book_new();
       xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       xlsx.writeFile(wb, this.fileName);
			
    }
}


