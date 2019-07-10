import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private showhide: boolean
  private addCityFieldValue: string;
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
    this.addCityFieldValue = 'jabalpur';
    this.city = this.cities[0];
    this.getTemperatureByCityName(this.city.Name);
  }

  getTemperatureByCityName(city: string) {
    this.httpClient.get(this.weatherBaseUrl + city + '&APPID=213f3a8c13345c52f690a971e7909fd2&units=metric').subscribe((res) => {
      this.result = res.main;
    });
  }

  getWeatherCondition(): string {
    if (this.result.temp < 20) {
      return 'cool';
    }
    if (this.result.temp > 20 && this.result.temp < 40) {
      return 'moderate';
    }
    if (this.result.temp > 40) {
      return 'hot';
    }
  }

  add() {
    console.log(this.addCityFieldValue);
    this.cities[this.cities.length] = {Name: this.addCityFieldValue};
  }
}



