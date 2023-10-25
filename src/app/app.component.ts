import { Component } from '@angular/core';
import { Service } from './server.server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'application';
  public photos:Array<any>=[];
  constructor(private service: Service){}
  ngOnInit(): void {
    this.service.getPhotos().subscribe((res)=>{
      this.photos = res;
      console.log(res.url)
    })
  }
}
