import { Component, OnInit, HostListener } from '@angular/core';
import * as Rellax from 'rellax';
import { SocialService } from '../../service/social.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  instagramFollowCount: number;
  facebookFollowCount: number;
  twitterFollowCount: number;
  linkedInFollowCount: number;
  constructor(
    private _socialService : SocialService
  ) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this._socialService.getInstagramInfo().then((res)=>{
      console.log('this is important', res);
      this.instagramFollowCount = res.graphql.user.edge_followed_by.count;
      console.log('this.instagramFollowCount', this.instagramFollowCount)
    });

    this._socialService.getFacebookInfo().then((res)=>{
      console.log('this is important', res);
      this.facebookFollowCount = res.fan_count;
      console.log('this.instagramFollowCount', this.facebookFollowCount)
    });

    this._socialService.getTwitterInfo().then((res)=>{
      console.log('this is important', res);
      // this.twitterFollowCount = res.followers_count;
      console.log('this.instagramFollowCount', this.twitterFollowCount)
    });
    // this._socialService.getLinkedInInfo().then((res)=>{
    //   console.log('this is important', res);
    //   this.linkedInFollowCount = res;
    //   console.log('this.instagramFollowCount', this.linkedInFollowCount)
    // });
    
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  facebook_link(){

  }
}
