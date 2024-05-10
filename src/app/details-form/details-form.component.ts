import { Component } from '@angular/core';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent {
  flag=true;
list=[
  {name:"Personal Details", icon:"fa fa-user-circle", case:"personal"},
  {name:"Nominee Details", icon:"fa fa-users", case:"nominee"},
  {name:"Medical History", icon:"fa fa-user-md", case:"medical"},
  {name:"Bank Details", icon:"fa fa-bank", case:"bank"},
]

personal_details:any={
  name:''
}
selectedQue: string = '';
// change(data:any){
//   this.selectedQue=data;
//   console.log("selected",this.selectedQue)
//   console.log("data",data)
// }
selectedName: string='';
selectedRelation: string='';


constructor() { }
personalDetailsMarginTop = 0;
nomineeDetailsMarginTop=0;
bankDetailsMarginTop=0;
medicalDetailsMarginTop=0;
nomineetop=0;
medicaltop=0;
banktop=0;
personaltop=0;

    change(section: string) {
        this.selectedQue=section;
  console.log("selected",this.selectedQue)
  console.log("data",section)
        if (section === 'personal') {
          // this.personaltop=0;
            this.personalDetailsMarginTop = -1100; // Adjust as needed to move other divs down
            this.nomineetop=850;
            this.nomineeDetailsMarginTop=0;
            this.medicalDetailsMarginTop=0;
            this.bankDetailsMarginTop=0;
            this.medicaltop=0;
            this.banktop=0;
        }  
        if (section === 'nominee')  {
            this.nomineetop=0
            this.medicaltop=850
            this.nomineeDetailsMarginTop = -1000; // Reset margin when other sections are clicked
            this.personalDetailsMarginTop=0;
            this.medicalDetailsMarginTop=0;
            this.bankDetailsMarginTop=0;
            this.banktop=0;
        }
        if (section === 'medical')  {
          this.medicaltop=0
          this.banktop=900
          this.medicalDetailsMarginTop = -950; // Reset margin when other sections are clicked
          this.personalDetailsMarginTop=0;
          this.bankDetailsMarginTop=0;
          this.nomineeDetailsMarginTop=0;
          this.nomineetop=0;
      }
      if (section === 'bank')  {
        this.banktop=0
        this.bankDetailsMarginTop = 0; // Reset margin when other sections are clicked
        this.medicalDetailsMarginTop = 0; // Reset margin when other sections are clicked
          this.personalDetailsMarginTop=0;
          this.nomineeDetailsMarginTop=0;
          this.medicaltop=0;
          this.nomineetop=0;
    }
    }


}
