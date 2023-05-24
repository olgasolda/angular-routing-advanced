import {Component, OnInit} from '@angular/core';
import {PhraseInterface} from "../shared/phrase.interface";
import {PHRASES} from "../shared/mock-data";

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {
  phrases!: PhraseInterface[];

  ngOnInit(): void {
    this.phrases = PHRASES;
    console.log(this.phrases);
  }
}
