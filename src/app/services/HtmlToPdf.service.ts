import { ElementRef, Injectable, ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class HtmlToPdfService {

  @ViewChild('content')
  content: ElementRef | undefined;

  constructor() {

  }

  printPdf(content:ElementRef| undefined){
    let doc = new jsPDF();

    doc.save('resume.pdf')
  }

  set div(content:ElementRef| undefined){
      this.content = content;
  }

  get div(){
    return this.content;
  }
}
