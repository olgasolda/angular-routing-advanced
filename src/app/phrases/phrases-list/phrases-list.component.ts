import {Component, OnInit} from '@angular/core';
import {PhraseInterface} from "../../shared/phrase.interface";
import {PhrasesService} from "../../shared/phrases.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {
  phrases!: PhraseInterface[];
  private selectedID!: number;

  constructor(
    private phrasesService: PhrasesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.selectedID = +params['id'];

      this.phrasesService
        .getAllPhrases()
        .then(phrases => {
          this.phrases = phrases;
        });
    });
  }

  onSelect(phrase: PhraseInterface): void {
    this.router.navigate(['phrase', phrase.id]).catch(console.log);
  }

  isSelected(phrase: PhraseInterface): boolean {
    return phrase.id === this.selectedID;
  }
}
