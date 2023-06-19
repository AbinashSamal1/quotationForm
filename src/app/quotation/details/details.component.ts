import { Component, OnInit, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { requireCheckboxesToBeCheckedValidator } from '../requiredcheckbox.validator';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  personalDetails!: FormGroup;
  projectServices!: FormGroup;
  services!: any;
  budget!: FormGroup;
  review!: FormGroup;
  version = 'Angular: v' + VERSION.full;

  // steps
  personal_step = false;
  project_services = false;
  budget_step = false;
  reviewSubmit = false;
  step = 1;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validation();
    this.validationForServices();
    this.validationForBudget();
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
      amount: new FormGroup(
        {
          amount1: new FormControl(false),
          amount2: new FormControl(false),
          amount3: new FormControl(false),
          amount4: new FormControl(false),
        },
        requireCheckboxesToBeCheckedValidator()
      ),
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
