import {Component, OnInit} from '@angular/core';
import {PhraseInterface} from "../shared/phrase.interface";
import {PHRASES} from "../shared/mock-data";

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {
  phrase!: PhraseInterface;

  ngOnInit(): void {
    this.phrase = PHRASES[0];
    console.log(this.phrase);
  }
}
