import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private baseUrl: string;
  private result: any;
  private city: string;
  public  cities = [
    {Name: 'Pune'},
    {Name: 'Mumbai'},
    {Name: 'Bina'},
    {Name: 'Sagar'},
    {Name: 'Indore'},
    {Name: 'Delhi'}
  ];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=pune,india&APPID=213f3a8c13345c52f690a971e7909fd2';
    this.get_products();
  }

  get_products() {
    this.httpClient.get(this.baseUrl).subscribe((res) => {
      this.result = res.main.temp;
    });
  }
}
