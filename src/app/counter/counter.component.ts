import { ChangeDetectionStrategy, Component, computed, effect, OnInit, signal } from "@angular/core";

@Component({
    selector: 'counter',
    template: `
    <div>
        <h1>Current count {{ count() }}</h1>
        <h2>Double count {{ doubleCount() }}</h2>
        <button (click)="incrementCount()">Increment</button>
    </div>
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

    count = signal(0);

    doubleCount = computed(() => this.count() * 2);

    incrementCount() {
        this.count.set(this.count() + 1);
    }

    ngOnInit(): void {
        effect(()=> console.log(`Counter value is: ${this.count()}`))
    }

}