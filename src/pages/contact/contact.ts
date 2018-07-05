import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              public http: HttpClient, public loadingCtrl: LoadingController) {
  }
  public list:Array<any>=[];
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }
  loadNews(){
    let that = this;
    this.presentLoading();
    let url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        url = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=20';
    this.http.get(url).subscribe(res=>{
      that.list = res['result'];
    },function (error) {
      console.log(error);
    })
  }

  ionViewDidLoad(){
    this.loadNews();
  }

}
