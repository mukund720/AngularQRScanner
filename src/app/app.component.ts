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

}
