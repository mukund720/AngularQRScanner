import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scanResult: any='';

  title = 'ANGULARQRSCANNER';

  onCodeResult(result:string)
  {
this.scanResult=result;
  }
}
