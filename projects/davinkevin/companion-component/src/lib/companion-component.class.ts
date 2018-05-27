import {takeUntil} from 'rxjs/operators';
import {MonoTypeOperatorFunction, Subject} from 'rxjs';

export class CompanionComponent {
  private readonly observable: Subject<void>;
  private readonly takeUntil: MonoTypeOperatorFunction<void>;

  constructor() {
    this.observable = new Subject<void>();
    this.takeUntil = takeUntil(this.observable);
  }

  untilDestroy(): () => MonoTypeOperatorFunction<void> {
    return () => this.takeUntil;
  }

  destroy() {
    this.observable.next();
    this.observable.complete();
  }

}
