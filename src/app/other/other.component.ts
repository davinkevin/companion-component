import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CompanionComponent} from '@davinkevin/companion-component';

@Component({
  selector: 'cc-other',
  template: `
    <p>
      {{ v }}
    </p>
  `,
  styles: []
})
export class OtherComponent implements OnInit, OnDestroy {
  v: number;

  private c = new CompanionComponent();

  constructor() { }

  ngOnInit() {
    const untilDestroy = this.c.untilDestroy();

    interval(100).pipe(
      untilDestroy(),
      tap(console.log)
    ).subscribe(v => this.v = v);

  }

  ngOnDestroy(): void {
    this.c.destroy();
  }

}
