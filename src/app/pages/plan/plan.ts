import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type ExerciseStatus = 'done' | 'pending';

interface ExerciseItem {
  readonly title: string;
  readonly focus: string;
  readonly sets: string;
  readonly reps: string;
  readonly rpe: string;
  readonly image: string;
  readonly status: ExerciseStatus;
}

interface DayPlan {
  readonly day: string;
  readonly label: string;
  readonly state: 'done' | 'active' | 'upcoming';
}

@Component({
  selector: 'app-plan',
  imports: [],
  templateUrl: './plan.html',
  styleUrl: './plan.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Plan {
  readonly progress = signal(64);

  readonly exercises = signal<readonly ExerciseItem[]>([
    {
      title: 'BARBELL SQUATS',
      focus: 'Compound • Quadriceps focus',
      sets: '04',
      reps: '08-10',
      rpe: '09',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80',
      status: 'done'
    },
    {
      title: 'DUMBBELL PRESS',
      focus: 'Upper Body • Chest & Triceps',
      sets: '03',
      reps: '12',
      rpe: '08',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80',
      status: 'pending'
    },
    {
      title: 'ROMANIAN DEADLIFT',
      focus: 'Posterior Chain • Glutes & Hams',
      sets: '04',
      reps: '10',
      rpe: '08.5',
      image:
        'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1400&q=80',
      status: 'pending'
    }
  ]);

  readonly weekSchedule = signal<readonly DayPlan[]>([
    { day: 'MON', label: 'FULL BODY A', state: 'done' },
    { day: 'TUE', label: 'REST', state: 'done' },
    { day: 'WED', label: 'ACTIVE SESSION', state: 'active' },
    { day: 'THU', label: 'UPPER BODY', state: 'upcoming' },
    { day: 'FRI', label: 'LOWER BODY', state: 'upcoming' }
  ]);
}
