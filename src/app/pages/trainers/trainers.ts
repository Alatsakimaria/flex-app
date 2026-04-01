import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface TrainerProfile {
  readonly name: string;
  readonly role: string;
  readonly blurb: string;
  readonly image: string;
  readonly featured?: boolean;
  readonly badge?: string;
  readonly experience?: string;
}

@Component({
  selector: 'app-trainers',
  imports: [],
  templateUrl: './trainers.html',
  styleUrl: './trainers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Trainers {
  readonly featuredTrainer = signal<TrainerProfile>({
    name: 'MARCUS REED',
    role: 'STRENGTH & CONDITIONING / OLYMPIC LIFTING',
    blurb:
      'Marcus specializes in explosive power and biomechanics. His philosophy: “Technique is the foundation of intensity.”',
    image:
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1400&q=80',
    featured: true,
    badge: 'MASTER COACH',
    experience: '10+ YEARS EXP.'
  });

  readonly trainers = signal<readonly TrainerProfile[]>([
    {
      name: 'SARAH CHEN',
      role: 'HIIT / METABOLIC BURN',
      blurb: 'Expert in fat-loss protocols and functional movement patterns. Transform your engine.',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'ELIAS VANCE',
      role: 'BODYWEIGHT ARCHITECT',
      blurb: 'Master of calisthenics. Build a body that moves as well as it looks.',
      image:
        'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'JENA MOSS',
      role: 'MOBILITY & RECOVERY',
      blurb: 'Sustainable performance through intentional recovery and joint health optimization.',
      image:
        'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1400&q=80'
    }
  ]);
}
