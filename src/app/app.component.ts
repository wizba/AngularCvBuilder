import { Component, ElementRef, ViewChild } from '@angular/core';
import { HtmlToPdfService } from './services/HtmlToPdf.service';
import {jsPDF} from 'jspdf';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { StoreService } from './services/store/Store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  isCollapsed = false;

  @ViewChild('content')
  content!: ElementRef;
  constructor(public storeService:StoreService){}

  size: NzButtonSize = 'large';
  makePdf() {
    let doc = new jsPDF("p", "pt", "a4");

       doc.html(this.content.nativeElement,{
        callback: (pdf) => {
          pdf.save("resume.pdf");
        },
       })

  }

  }
