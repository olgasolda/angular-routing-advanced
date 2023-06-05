import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhrasesHostComponent} from "./phrases-host/phrases-host.component";
import {PhrasesListComponent} from "./phrases-list/phrases-list.component";
import {PhraseDetailsComponent} from "./phrase-details/phrase-details.component";
import {canDeactivateGuard} from "../shared/guards/can-deactivate.guard";
import {phraseDetailsResolver} from "../shared/resolver/phrase-details.resolver";

const routes: Routes = [
  {
    path: 'phrases',
    component: PhrasesHostComponent,
    children: [
      {
        path: '',
        component: PhrasesListComponent,
        children: [
          {
            path: ':id',
            component: PhraseDetailsComponent,
            canDeactivate: [canDeactivateGuard],
            resolve: {
              phrase: phraseDetailsResolver
            }
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule {
}
