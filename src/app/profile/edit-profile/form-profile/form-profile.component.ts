import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent {
  addressForm = this.fb.group({
    // ...: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    iAm: ['any', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Formosa', abbreviation: 'FO'},
    {name: 'Chaco', abbreviation: 'CH'},
    {name: 'Corrientes', abbreviation: 'CO'},
    {name: 'Misiones', abbreviation: 'MI'},
    {name: 'Santiago del Estero', abbreviation: 'SA'},
    {name: 'Santa Fe', abbreviation: 'SA'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Actualizado!');
  }
}
