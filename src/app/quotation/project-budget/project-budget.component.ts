import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrls: ['./project-budget.component.css'],
})
export class ProjectBudgetComponent implements OnInit {
  myForm!: FormGroup;
  isFormSubmitted = false;
  submittedValue: any;

  RADIO_LIST = [
    { name: '$5,000-$10,000', value: 'amount1', checked: false },
    { name: '$10,000-$20,000', value: 'amount2', checked: false },
  ];
  RADIO_LIST2 = [
    { name: '$20,000-$50,000', value: 'amount3', checked: false },
    { name: '$50,000+', value: 'amount4', checked: false },
  ];

  constructor() {}

  ngOnInit(): void {
    let getCheckedRadio = null;
    this.RADIO_LIST.forEach((o) => {
      if (o.checked) getCheckedRadio = o.value;
    });

    this.myForm = new FormGroup({
      paymentOptions: new FormControl(getCheckedRadio, [Validators.required]),
    });
  }
  submitForm() {
    this.isFormSubmitted = true;
    console.log('valid', this.myForm.valid);
    if (!this.myForm.valid) {
      console.log('Please provide all the required values!');
      this.submittedValue = undefined;
      return false;
    } else {
      console.log(this.myForm.value);
      this.submittedValue = this.RADIO_LIST.find(
        (rv) => rv.value === this.myForm.value['paymentOptions']
      );
      return true;
    }
  }
}
