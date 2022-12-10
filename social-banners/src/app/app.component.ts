import { Component } from '@angular/core';
import { DomToImage } from 'dom-to-image';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  width = 600;
  height = 500;
  color1 = 'yellow';
  color2 = 'pink';
  percentColor1 = 0;
  percentColor2 = 100;
  fontSize = 52;

  layout = {
    horizontal: false,
    horizontalRev: false,
    vertical: false,
    verticalRev: false,
  };

  colors = [
    'red',
    'purple',
    'blue',
    'green',
    'yellow',
    'brown',
    'grey',
    'black',
  ];

  getBannerStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentColor1}%, ${this.color2} ${this.percentColor2}%)`,
    };
  }

  setLayout(selectedLayout: any) {
    // Object.keys(this.layout).forEach((key) => (this.layout[key] = false));
    // this.layout[selectedLayout] = true;
    console.log('sdfsdfa');
  }

  saveImage(element: HTMLDivElement) {
    DomToImage.toBlob(element).then((blob: any) => saveAs(blob));
  }
}
