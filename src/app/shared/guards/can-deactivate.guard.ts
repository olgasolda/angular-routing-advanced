import {CanDeactivateFn} from '@angular/router';
import {CanComponentDeactivateInterface} from "../types/can-component-deactivate.interface";

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivateInterface> = (component: CanComponentDeactivateInterface) => {
  return component?.canDeactivate ? component?.canDeactivate() : true;
};
