import { Component } from '@angular/core';
import { Service } from '../server.server';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public photos:Array<any>=[];
  constructor(private service: Service){}
  ngOnInit(): void {
    this.service.getPhotos().subscribe((res)=>{
      this.photos = res;
      console.log(res.url)
    })
  }
}
