import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {PhrasesService} from "../services/phrases.service";
import {PhraseInterface} from "../types/phrase.interface";

const defaultPhrase: PhraseInterface = {id: 999999999, value: 'Unknown', language: 'Unknown'};
export const phraseDetailsResolver: ResolveFn<PhraseInterface | boolean> = (route) => {
  const id = +route.params['id'];

  return inject(PhrasesService).getPhrase(id).then(phrase => {
    if (phrase) return phrase;
    return defaultPhrase;
  });
};
