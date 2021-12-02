import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StarshipService } from '../../_services/starship.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starShipForm!: FormGroup;

  constructor(private fb: FormBuilder, private startShipService: StarshipService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.starShipForm = this.fb.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      costInCredits: ['', Validators.required],
      crew: [''],
      created: ['', Validators.required],
      pilots: ['']
    });
  }

  createShip() {
    this.startShipService.registerShip(this.starShipForm.value);
    this.router.navigate(['starship']);
  }
}
