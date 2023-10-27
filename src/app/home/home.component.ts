import { Component } from '@angular/core';
import { Service } from '../server.server';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  })
export class HomeComponent {
  public photos:Array<any>=[];
  constructor(private service: Service,
    private metaService: Meta){
      // this.addMetaTag();
    }
  ngOnInit(): void {
    this.service.getPhotos().subscribe((res)=>{
     this.photos = res;
    })
  }
  // public addMetaTag(){
  //   this.metaService.addTag({ name: 'description', content: 'Home' });
  //     this.metaService.addTag({ name: 'robots', content: 'index,follow' });
  //     this.metaService.addTag({ property: 'og:title', content: 'Content Title Home' });
  // }
}
