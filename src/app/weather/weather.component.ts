import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private result: any;
  private city: any;
  private weatherBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  public cities = [
    {Name: 'Pune'},
    {Name: 'Mumbai'},
    {Name: 'Bina'},
    {Name: 'Sagar'},
    {Name: 'Indore'},
    {Name: 'Delhi'}
  ];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  getTemperatureByCityName(city: string) {
    this.httpClient.get(this.weatherBaseUrl + city + '&APPID=213f3a8c13345c52f690a971e7909fd2&units=metric').subscribe((res) => {
      this.result = res.main.temp;
    });
  }

  getWeatherCondition(): string {
    if (this.result < 20) {
      return 'cool';
    }
    if (this.result > 20 && this.result < 40) {
      return 'moderate';
    }
    if (this.result > 40) {
      return 'hot';
    }
  }
}

