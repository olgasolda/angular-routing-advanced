import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhraseInterface} from "../../shared/types/phrase.interface";
import {PhrasesService} from "../../shared/services/phrases.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../../shared/services/auth.service";
import {CanComponentDeactivateInterface} from "../../shared/types/can-component-deactivate.interface";

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit, OnDestroy, CanComponentDeactivateInterface {
  phrase!: PhraseInterface;
  subscription!: Subscription;
  editValue!: string;
  editLanguage!: string;

  constructor(
    private phrasesService: PhrasesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.phrase = data['phrase'];
      this.editValue = this.phrase.value;
      this.editLanguage = this.phrase.language;
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

  save() {
    if (!this.phrase) return;
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;
  }

  isPhraseChanged(): boolean {
    return !(this.phrase?.value === this.editValue && this.phrase.language === this.editLanguage);
  }

  canDeactivate(): boolean {
    if (!this.phrase) return true;
    if (!this.isPhraseChanged()) return true;
    return confirm('Вы не сохранили изменения. \nДанные будут утеряны. \nПерейти в любом случае?');
  }
}
