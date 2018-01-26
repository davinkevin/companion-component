import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {MonoTypeOperatorFunction} from 'rxjs/interfaces';

export class CompanionComponent {
  private observable: Subject<any>;
  private takeUntil: MonoTypeOperatorFunction<any>;

  constructor() {
    this.observable = new Subject();
    this.takeUntil = takeUntil(this.observable);
  }

  untilDestroy() {
    return () => this.takeUntil;
  }

  destroy() {
    this.observable.next();
    this.observable.complete();
  }

}
