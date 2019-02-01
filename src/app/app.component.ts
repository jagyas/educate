import { Component, OnInit, OnDestroy } from  '@angular/core';
import { ApiService } from  './api.service';
import { Item } from  './api.service';
import { Subscription } from 'rxjs';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'educate',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {}
