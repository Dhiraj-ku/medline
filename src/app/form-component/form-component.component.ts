import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  registrationForm:FormGroup;
  submitted = false;
  closeResult = '';
  showModal:any;
  valuesObj:any;
  firstName:any;
  constructor(
    private formBuilder : FormBuilder,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['',Validators.required],
      phone : ['',Validators.required],
      ext:[''],
      Email: ['', Validators.required]
    });


  }

  get f(){
    return this.registrationForm.controls;
  }

  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      this.showModal = false;
        return;
    }
    if(this.submitted)
    {
      this.showModal = true;
  }
}

next(){
  this.hide();
  this.router.navigate(['success']);

}


}
