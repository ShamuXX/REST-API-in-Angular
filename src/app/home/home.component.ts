import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  data: any[] = [];
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.takeData();
  }
  
  takeData( ){
    this.apiService.getData().subscribe(data => {
      this.data = data;
    })
  }
}
