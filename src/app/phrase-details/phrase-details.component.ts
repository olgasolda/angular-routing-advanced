import {Component, OnInit} from '@angular/core';
import {PhraseInterface} from "../shared/phrase.interface";
import {PhrasesService} from "../shared/phrases.service";

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {
  phrase!: PhraseInterface;

  constructor(private phrasesService: PhrasesService) {
  }

  ngOnInit(): void {
    this.phrasesService.getPhrase(2)
      .then(phrase => {
        if (!phrase) return;
        this.phrase = phrase;
        console.log(this.phrase);
      })
  }
}
