import { ChangeDetectionStrategy, Component, computed, effect, signal } from "@angular/core";

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
export class CounterComponent {

    count = signal(0);

    doubleCount = computed(() => this.count() * 2);

    private t = effect(()=> console.log(`Counter value is ${this.count()}`))

    incrementCount() {
        this.count.set(this.count() + 1);
    }

}