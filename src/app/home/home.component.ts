import { Component } from '@angular/core';
import { Service } from '../server.server';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  })
export class HomeComponent {
  public photos:Array<any>=[];
  constructor(private service: Service){}
  ngOnInit(): void {
    this.service.getPhotos().subscribe((res)=>{
      this.photos = res;
      console.log(res.url)
    })
  }
}
