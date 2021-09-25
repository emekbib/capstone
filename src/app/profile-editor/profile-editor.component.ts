import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({

    contactName: new FormControl('', Validators.required),

    contactJob: new FormControl('',Validators.required),

    contactEmail: new FormControl('',Validators.required),

    contactPhone: new FormControl('',Validators.required),

    comapnyName: new FormControl('',Validators.required),

    organAddress: new FormControl('',Validators.required),

    organWebsite: new FormControl('',Validators.required),

  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
