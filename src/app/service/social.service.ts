import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment} from '../../environments/environment';
import axios from 'axios';
// import { getTwitterFollowers } from './twitter';


/**
 * @description
 * @class
 */


export class SocialService
{
 
  instagram_BaseURL = "https://www.instagram.com";
  facebook_BaseURL = "https://graph.facebook.com/";
  twitter_BaseURL = "https://syndication.twimg.com/";
  linkedIn_BaseURL = "https://www.linkedin.com/pages-extensions/FollowCompany";
  facebook_page_token = environment.facebook.page_access_token;
  userName = 'Neurotops';
  LinkedIn_pageId = "49134530";
 
  constructor(
    private _httpClient: HttpClient,
  ) 
  {
   
  }

  
  async getInstagramInfo(): Promise<any>{
   
      // this.instagram_BaseURl+this.userName+JSON.stringify(data)
    console.log('this is importat', 'aaaaaaaaaaaaa');
    return new Promise(async(resolve, reject)=>{
        this._httpClient.get(`${this.instagram_BaseURL}/${this.userName}/?user=efewwef&__a=1`)
          .subscribe((response: any) => {

            console.log('this is importat', response);

          resolve(response);
        }, reject);
    });
  }
  async getFacebookInfo(): Promise<any>{

    return new Promise(async(resolve, reject)=>{
        this._httpClient.get(`${this.facebook_BaseURL}${this.userName}?fields=fan_count&access_token=${this.facebook_page_token}`)
          .subscribe((response: any) => {

            console.log('this is importat', response);

          resolve(response);
        }, reject);
    });
  }

  async getTwitterInfo(): Promise<any>{

    //https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names="+twitter_username
  
  //  https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=neurotops

    // getTwitterFollowers('neurotops')
    // console.log('this is',  getTwitterFollowers(['neurotops', 'unitedpursuit', 'historyinpics']))
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // }
    // const data ={
    //   'screen_names': this.userName
    // }
    // return new Promise(async(resolve, reject)=>{
    //     // this._httpClient.get(`${this.twitter_BaseURL}widgets/followbutton/info.json?screen_names=${this.userName}`)  
    //     // this._httpClient.get("http://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=Neurotops")  
    //     // this._httpClient.get(`http://gettwitterid.com/?user_name=neurotops`)
    //       .subscribe((response: any) => {

    //         console.log('this is importat', response);

    //       resolve(response);
    //     }, reject);
    // });

    axios.get("https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=Neurotops")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    
  }

  async getLinkedInInfo(): Promise<any>{
    //  https://www.linkedin.com/pages-extensions/FollowCompany?id=4913430&counter=bottom
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Cookie': 'bcookie="v=2&0fcf8a9f-2a8f-49e6-8df0-9f4dd5e512f3"; bscookie="v=1&20200527165342547542ad-d4b6-4f48-8147-26996226486bAQFZJ53xGyGhR_Y7JyDPq7AZwDpUmF65"; lissc=1; lidc="b=TGST08:g=1715:u=1:i=1590816017:t=1590902417:s=AQEckLe0TJYg7kURo4ukEAEWYDgXCXQF"; JSESSIONID=ajax:5288096831807450770; lang=v=2&lang=en-us'
        })
      }
      const data ={
        'screen_names': this.userName
      }
      return new Promise(async(resolve, reject)=>{
          this._httpClient.get(`${this.linkedIn_BaseURL}?id=${this.LinkedIn_pageId}&counter=bottom`, httpOptions)
            .subscribe((response: any) => {
  
              console.log('this is importat!!!!!!!!!!!!!!!!!!', response);
  
            resolve(response);
          }, reject);
      });
    }
  
}
