import {Injectable} from '@angular/core';
import {PhraseInterface} from "../types/phrase.interface";
import {PHRASES} from "../mock/mock-data";

const phrasesPromise: Promise<PhraseInterface[]> = Promise.resolve(PHRASES);

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  constructor() {
  }

  getAllPhrases(): Promise<PhraseInterface[]> {
    return phrasesPromise;
  }

  getPhrase(id: number): Promise<PhraseInterface | undefined> {
    return phrasesPromise
      .then(phrases => phrases.find(phrase => phrase.id === id));
  }
}
