import {Component, OnInit} from '@angular/core';
import {PhraseInterface} from "../shared/phrase.interface";
import {PhrasesService} from "../shared/phrases.service";

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {
  phrases!: PhraseInterface[];

  constructor(private phrasesService: PhrasesService) {
  }

  ngOnInit(): void {
    this.phrasesService.getAllPhrases()
      .then(phrases => {
        this.phrases = phrases;
        console.log(this.phrases);
      });
  }
}
