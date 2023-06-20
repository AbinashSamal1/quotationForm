import { Component, OnInit, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { requireCheckboxesToBeCheckedValidator } from '../requiredcheckbox.validator';
enum CheckBoxType {
  amount1,
  amount2,
  amount3,
  amount4,
  none,
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  personalDetails!: FormGroup;
  projectServices!: FormGroup;
  services!: FormGroup;
  budget!: FormGroup;
  review!: FormGroup;

  // stepper
  personal_step = false;
  project_services = false;
  budget_step = false;
  reviewSubmit = false;
  step = 1;

  // radio list
  RADIO_LIST = [{ name: '$5,000-$10,000', value: 'amount1', checked: false }];
  RADIO_LIST2 = [{ name: '$10,000-$20,000', value: 'amount2', checked: false }];
  RADIO_LIST3 = [{ name: '$20,000-$50,000', value: 'amount3', checked: false }];
  RADIO_LIST4 = [{ name: '$50,000+', value: 'amount4', checked: true }];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validation();
    this.validationForServices();

    // Radio list validation
    let getCheckedRadio = null;
    this.RADIO_LIST.forEach((o) => {
      if (o.checked) getCheckedRadio = o.value;
    });
    this.budget = new FormGroup({
      paymentOptions: new FormControl(getCheckedRadio, [Validators.required]),
    });
  }

  validation() {
    this.personalDetails = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      company: new FormControl('', [Validators.required]),
    });
  }
  //   this.myGroup = new FormGroup({
  //     person: new FormGroup({ firstName: new FormControl() })
  // });
  validationForServices() {
    this.projectServices = new FormGroup({
      services: new FormGroup(
        {
          dev: new FormControl(false),
          web: new FormControl(false),
          marketing: new FormControl(false),
          others: new FormControl(false),
        },
        requireCheckboxesToBeCheckedValidator()
      ),
    });
  }
  validationForBudget() {
    this.budget = new FormGroup({
      amount: new FormGroup({
        amount1: new FormControl(['', Validators.required]),
        amount2: new FormControl(false),
        amount3: new FormControl(false),
        amount4: new FormControl(false),
      }),
    });
  }

  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) {
        return;
      }
      this.step++;
    } else if (this.step == 2) {
      this.project_services = true;
      if (this.projectServices.invalid) {
        return;
      }
      this.step++;
    } else if (this.step == 3) {
      this.budget_step = true;
      if (this.budget.invalid) {
        return;
      }
      this.step++;
    }
  }
  previous() {
    this.step--;

    if (this.step == 1) {
      this.project_services = false;
    }
    if (this.step == 2) {
      this.budget_step = false;
    }
    if (this.step == 3) {
      this.reviewSubmit = true;
    }
  }

  submit() {
    if (this.step == 4) {
      this.reviewSubmit = true;
      alert('Well done!!');
    }
  }
}
