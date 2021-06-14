import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';

@Component({
  selector: 'app-Work',
  templateUrl: './Work.component.html',
  styleUrls: ['./Work.component.scss']
})
export class WorkComponent implements OnInit {

  checked = true;
  myOptions:IAngularMyDpOptions={
    monthLabels:{
      1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
    },
    stylesData: {
      selector: 'dp1',
      styles: `
         .dp1 .myDpIconLeftArrow,
         .dp1 .myDpIconRightArrow,
         .dp1 .myDpHeaderBtn {
             color: #3855c1;
          }
         .dp1 .myDpHeaderBtn:focus,
         .dp1 .myDpMonthLabel:focus,
         .dp1 .myDpYearLabel:focus {
             color: #66afe9;
          }
         .dp1 .myDpDaycell:focus,
         .dp1 .myDpMonthcell:focus,
         .dp1 .myDpYearcell:focus {
             box-shadow: inset 0 0 0 1px #66afe9;
          }
         .dp1 .myDpSelector:focus {
             box-shadow: -1px 1px 6px 0px #ADD8E6;
          }
         .dp1 .myDpSelectorArrow:focus:before {
             border-bottom-color: #ADD8E6;
          }
         .dp1 .myDpCurrMonth,
         .dp1 .myDpMonthcell,
         .dp1 .myDpYearcell {
             color: #3855c1;
             font-weight: bold;
          }
         .dp1 .myDpDaycellWeekNbr {
             color: #3855c1;
          }
         .dp1 .myDpPrevMonth,
         .dp1 .myDpNextMonth {
             color: #6495ED;
          }
         .dp1 .myDpWeekDayTitle {
             background-color: transparent;
             color: #3855c1;
             font-weight: bold;
          }
         .dp1 .myDpHeaderBtnEnabled:hover,
         .dp1 .myDpMonthLabel:hover,
         .dp1 .myDpYearLabel:hover,
         .dp1 .myDpFooterBtn:hover {
             color: #add8e6;
          }
         .dp1 .myDpMarkCurrDay,
         .dp1 .myDpMarkCurrMonth,
         .dp1 .myDpMarkCurrYear {
             border-bottom: 2px solid #3855c1;
          }
         .dp1 .myDpDisabled {
             color: #999;
          }
         .dp1 .myDpHighlight {
             color: #cd5c5c;
          }
         .dp1 .myDpTableSingleDay:hover,
         .dp1 .myDpTableSingleMonth:hover,
         .dp1 .myDpTableSingleYear:hover {
             background-color: #add8e6;
             color: #3855c1;
          }
         .dp1 .myDpRangeColor {
             background-color: #dbeaff;
          }
         .dp1 .myDpSelectedDay,
         .dp1 .myDpSelectedMonth,
         .dp1 .myDpSelectedYear {
             background-color: #8EBFFF;
          }
       `
    }
  };
  constructor() { }

  ngOnInit() {
  }

  DatePickerOptions: IAngularMyDpOptions = {
    // options here...
}



onDateChanged(event: IMyDateModel) {
    console.log('onDateChanged(): ', event);
}



}
