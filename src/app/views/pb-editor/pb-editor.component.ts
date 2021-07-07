import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CsPropertie } from 'src/app/model/csPropertie';
import { Info } from 'src/app/model/info';

@Component({
  selector: 'app-pb-editor',
  templateUrl: './pb-editor.component.html',
  styleUrls: ['./pb-editor.component.scss']
})
export class PbEditorComponent implements OnInit {

  title = 'PickBanEditor';

  // Editor Related Properties

  gridSize = 5;

  gridsX = [];
  gridsY = [];

  showGrid = false;

  horizontalChamps = false;

  showChamps = true;

  properties: CsPropertie[] = [];

  // Game Related Properties

  playercount: Info[] = [
    { id: 'player0', initX: 0, initY: 0, description: 'Player 1 Blue' },
    { id: 'player1', initX: 160, initY: 0, description: 'Player 2 Blue' },
    { id: 'player2', initX: 320, initY: 0, description: 'Player 3 Blue' },
    { id: 'player3', initX: 480, initY: 0, description: 'Player 4 Blue' },
    { id: 'player4', initX: 640, initY: 0, description: 'Player 5 Blue' },
    { id: 'player5', initX: 0, initY: 290, description: 'Player 1 Red' },
    { id: 'player6', initX: 160, initY: 290, description: 'Player 2 Red' },
    { id: 'player7', initX: 320, initY: 290, description: 'Player 3 Red' },
    { id: 'player8', initX: 480, initY: 290, description: 'Player 4 Red' },
    { id: 'player9', initX: 640, initY: 290, description: 'Player 5 Red' }
  ];

  constructor() {
    for (let index = 0; index < 1920; index += 5) {
      this.gridsX.push(index);
    }

    for (let index = 0; index < 1080; index += 5) {
      this.gridsY.push(index);
    }
  }

  ngOnInit(): void {

  }

  showGrids(): void {

    if (this.showGrid === false) {
      this.showGrid = true;
    } else {
      this.showGrid = false;
    }
  }

  disableChamps(): void {

    if (this.showChamps === false) {
      this.showChamps = true;
    } else {
      this.showChamps = false;
    }
  }

  changeSplasharts(): void {

    if (this.horizontalChamps === false) {
      this.horizontalChamps = true;

      this.playercount[0].initX = 0;
      this.playercount[1].initX = 0;
      this.playercount[2].initX = 0;
      this.playercount[3].initX = 0;
      this.playercount[4].initX = 0;
      this.playercount[5].initX = 310;
      this.playercount[6].initX = 310;
      this.playercount[7].initX = 310;
      this.playercount[8].initX = 310;
      this.playercount[9].initX = 310;

      this.playercount[0].initY = 0;
      this.playercount[1].initY = 110;
      this.playercount[2].initY = 220;
      this.playercount[3].initY = 330;
      this.playercount[4].initY = 440;
      this.playercount[5].initY = 0;
      this.playercount[6].initY = 110;
      this.playercount[7].initY = 220;
      this.playercount[8].initY = 330;
      this.playercount[9].initY = 440;
    } else {
      this.horizontalChamps = false;

      this.playercount[0].initX = 0;
      this.playercount[1].initX = 160;
      this.playercount[2].initX = 320;
      this.playercount[3].initX = 480;
      this.playercount[4].initX = 640;
      this.playercount[5].initX = 0;
      this.playercount[6].initX = 160;
      this.playercount[7].initX = 320;
      this.playercount[8].initX = 480;
      this.playercount[9].initX = 640;

      this.playercount[0].initY = 0;
      this.playercount[1].initY = 0;
      this.playercount[2].initY = 0;
      this.playercount[3].initY = 0;
      this.playercount[4].initY = 0;
      this.playercount[5].initY = 290;
      this.playercount[6].initY = 290;
      this.playercount[7].initY = 290;
      this.playercount[8].initY = 290;
      this.playercount[9].initY = 290;
    }
  }

  toggleCSView(): void {

    this.properties = [];

    this.playercount.forEach(p => {

      var el = document.getElementById(p.id);

      var style = el.attributes.getNamedItem('style');
      var styles = style.value.split(';');
      var transform = styles[1].split('(');
      var positions = transform[1].split(',');

      var x = positions[0].split('p')[0] as unknown as number;
      var y = positions[1].split('p')[0].trim() as unknown as number;

      var width = el.offsetWidth;
      var height = el.offsetHeight;

      this.properties.push({ id: p.id, x: x, y: y, width: width, height: height });
    });

    // this.showChamps = false;
    
    console.log(this.properties);
  }

}
