import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  qrResultString: any='';

  title = 'ApiCallDemo';

  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: any) {
    this.qrResultString = resultString;
  }
  notFoundresult:any='';
  camerasNotFound(result:any)
  {
    this.notFoundresult=result
    
    alert('camera not found');

  }
  foundresult:any=''
  cameraFound(result:any)
  {
    this.foundresult=result;
  }
  isWebView()
  {
    console.log('is web view');
    var userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test( userAgent ),
    ios = /iphone|ipod|ipad/.test( userAgent );

if( ios ) {
    if ( safari ) {
        //browser
    } else if ( !safari ) {
        //webview
        alert("u r using android webview, u use qr scanner opening in chrome,plz wait");
        window.location.href="https://mukundqr.000webhostapp.com/";
    };
} else {
    //not iOS
};
  }

}
