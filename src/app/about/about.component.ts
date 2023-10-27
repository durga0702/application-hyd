import { Component } from '@angular/core';
import { Service } from '../server.server';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public photos:Array<any>=[];
  constructor(private service: Service,
    private metaService: Meta,){
    // this.addMetaTag();
  }
  ngOnInit(): void {
    this.service.getPhotos().subscribe((res)=>{
      this.photos = res;
     })
  }
  // public addMetaTag(){
  //   this.metaService.updateTag({ name: 'description', content: 'About' });
  //     this.metaService.updateTag({ name: 'robots', content: 'index,follow' });
  //     this.metaService.updateTag({ property: 'og:title', content: 'Content Title About' });
  // }
}
