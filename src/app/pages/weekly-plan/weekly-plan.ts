import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav';

interface DayProgram {
  readonly day: string;
  readonly title: string;
  readonly focus: string;
  readonly duration: string;
  readonly exercises: readonly string[];
}

@Component({
  selector: 'app-weekly-plan',
  standalone: true,
  imports: [TopNavComponent],
  templateUrl: './weekly-plan.html',
  styleUrl: './weekly-plan.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeeklyPlanComponent {
  readonly weekProgram = signal<readonly DayProgram[]>([
    {
      day: 'MONDAY',
      title: 'Upper Body Strength',
      focus: 'Chest, Back, Shoulders',
      duration: '60 min',
      exercises: ['Bench Press', 'Lat Pulldown', 'Overhead Press', 'Dumbbell Row']
    },
    {
      day: 'TUESDAY',
      title: 'Lower Body Power',
      focus: 'Quads, Glutes, Hamstrings',
      duration: '55 min',
      exercises: ['Back Squat', 'Romanian Deadlift', 'Lunges', 'Leg Press']
    },
    {
      day: 'WEDNESDAY',
      title: 'Conditioning + Core',
      focus: 'Cardio Endurance',
      duration: '45 min',
      exercises: ['Treadmill Intervals', 'Battle Rope', 'Plank Series', 'Russian Twists']
    },
    {
      day: 'THURSDAY',
      title: 'Push Hypertrophy',
      focus: 'Chest, Shoulders, Triceps',
      duration: '50 min',
      exercises: ['Incline Press', 'Cable Fly', 'Lateral Raises', 'Tricep Pushdown']
    },
    {
      day: 'FRIDAY',
      title: 'Pull + Posterior Chain',
      focus: 'Back, Rear Delts, Biceps',
      duration: '55 min',
      exercises: ['Deadlift', 'Seated Row', 'Face Pull', 'Hammer Curl']
    },
    {
      day: 'SATURDAY',
      title: 'Functional Full Body',
      focus: 'Athletic Movement',
      duration: '50 min',
      exercises: ['Kettlebell Circuit', 'Sled Push', 'Burpees', 'Farmer Carry']
    },
    {
      day: 'SUNDAY',
      title: 'Recovery Day',
      focus: 'Mobility + Light Cardio',
      duration: '30 min',
      exercises: ['Stretch Flow', 'Foam Roll', 'Walk / Cycle', 'Breathing Drill']
    }
  ]);

}
