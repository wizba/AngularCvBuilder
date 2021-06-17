import { Component, ElementRef, ViewChild } from '@angular/core';
import { HtmlToPdfService } from './services/HtmlToPdf.service';
import {jsPDF} from 'jspdf';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { StoreService } from './services/store/Store.service';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  isCollapsed = false;

  @ViewChild('content')
  content!: ElementRef;
  constructor(public storeService:StoreService,private modal: NzModalService){

    // this.modal.confirm({
    //   nzTitle: '<i>Do you Want to delete these items?</i>',
    //   nzContent: '<b>Some descriptions</b>',
    //   nzOnOk: () => console.log('OK')
    // });
  }

  size: NzButtonSize = 'large';
  makePdf() {
    let doc = new jsPDF("p", "pt", "a4");

       doc.html(this.content.nativeElement,{
        callback: (pdf) => {
          pdf.save("resume.pdf");
        },
       })

  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this item?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  }
