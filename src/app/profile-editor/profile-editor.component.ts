import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
  });

  foundZipCity() {
    let postal_code = this.profileForm.get("address")?.get("zip")?.value;

    let foundZipCity = data.find(data => data.zip_code == postal_code);
    this.profileForm.patchValue({
      address: {
        city: foundZipCity?.city
      }
    });
  }

  constructor(private fb: FormBuilder) { }
  
  onZipChange(){
    
  }
  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
 
}

let data = [

  {
    zip_code: 30144,
    city: "Kennesaw",
    state: "GA"
  },

  {
    zip_code: 30152,
    city: "Kennesaw",
    state: "GA"
  },

  {
    zip_code: 30060,
    city: "Marietta",
    state: "GA"
  },

  {
    zip_code: 30061,
    city: "Marietta",
    state: "GA"
  },

];