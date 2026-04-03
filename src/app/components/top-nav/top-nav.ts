import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavComponent {}
