import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhraseInterface} from "../../shared/phrase.interface";
import {PhrasesService} from "../../shared/phrases.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit, OnDestroy {
  phrase!: PhraseInterface;
  subscription!: Subscription;

  constructor(
    private phrasesService: PhrasesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe({
      next: params => {
        const id: number = +params['id'];

        if (isNaN(id)) return;

        this.phrasesService.getPhrase(id)
          .then(phrase => {
            if (!phrase) return;
            this.phrase = phrase;
          });
      },
      error: err => console.log(err),
      // complete: () => console.log('completed')
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToPhrasesList(): void {
    this.router.navigate(['/phrases', {
      id: this.phrase.id,
      param1: 'test'
    }]).catch(console.log);
  }
}
