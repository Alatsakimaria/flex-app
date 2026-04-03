import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav';

interface ProfileStat {
  readonly label: string;
  readonly value: string;
  readonly accent: 'lime' | 'orange';
}

interface AccountItem {
  readonly title: string;
  readonly icon: 'settings' | 'support' | 'notifications';
}

@Component({
  selector: 'app-profile',
  imports: [TopNavComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Profile {
  readonly memberName = signal('MARCUS VANE');
  readonly memberTier = signal('GOLD MEMBER');

  readonly stats = signal<readonly ProfileStat[]>([
    { label: 'TOTAL WORKOUTS', value: '142', accent: 'lime' },
    { label: 'ACTIVE STREAK', value: '12d', accent: 'orange' }
  ]);

  readonly accountItems = signal<readonly AccountItem[]>([
    { title: 'Settings', icon: 'settings' },
    { title: 'Support Center', icon: 'support' },
    { title: 'Notifications', icon: 'notifications' }
  ]);
}
