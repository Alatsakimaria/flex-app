import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TopNavComponent } from '../../components/top-nav/top-nav';

interface GallerySlide {
  readonly src: string;
  readonly alt: string;
}

interface QuickAction {
  readonly label: string;
  readonly icon: string;
  readonly route?: string;
}

@Component({
  selector: 'app-home',
  imports: [TopNavComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly quickActions = signal<readonly QuickAction[]>([
    { label: 'VIEW MY PLAN', icon: 'plan', route: '/weekly-plan' },
    { label: 'REQUEST TRAINER', icon: 'headset', route: '/trainers' }
  ]);

  readonly classes = signal([
    { time: '08:00', period: 'AM', title: 'HIIT REVOLUTION', coach: 'COACH SARAH JENKINS', status: 'book' },
    { time: '12:30', period: 'PM', title: 'POWER LIFTING 101', coach: 'MARCUS VANE', status: 'book' },
    { time: '17:45', period: 'PM', title: 'COMBAT CARDIO', coach: 'DAMON THORNE', status: 'wait' }
  ]);

  readonly gallerySlides: readonly GallerySlide[] = [
    { src: '/photos/flex-1.jpg', alt: 'Member running on treadmill inside Flex gym' },
    { src: '/photos/flex-2.jpg', alt: 'Member training on lat pull machine at Flex gym' },
    { src: '/photos/flex-3.jpg', alt: 'Group strength workout floor at Flex gym' },
    { src: '/photos/flex-4.jpg', alt: 'Members resting between machine sets at Flex gym' },
    { src: '/photos/flex-5.jpg', alt: 'Bench press setup during chest training session' },
    { src: '/photos/flex-6.jpg', alt: 'Push your limits area inside Flex gym' }
  ];

  readonly activeSlideIndex = signal(0);

  private slideTimer: ReturnType<typeof setInterval> | null = null;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  nextSlide(): void {
    this.activeSlideIndex.update((index) => (index + 1) % this.gallerySlides.length);
  }

  openQuickAction(action: QuickAction): void {
    if (action.route) {
      void this.router.navigateByUrl(action.route);
    }
  }

  private startAutoplay(): void {
    this.slideTimer = setInterval(() => this.nextSlide(), 4200);
  }

  private stopAutoplay(): void {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
      this.slideTimer = null;
    }
  }
}