import { Component, ElementRef, OnInit, Input, EventEmitter, Output, HostListener, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-wigget',
  templateUrl: './my-wigget.component.html',
  styleUrls: ['./my-wigget.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class MyWiggetComponent  {
  @Input()
  public name: string;

  @Input()
  public surname: string;

  @Output()
  public myCustomEvent: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click', ['$event.target'])
  public clickEvent(target: HTMLElement): void {
    console.log(target);
  }

  @HostListener('mouseenter')
  public mouseEvent(): void {
    console.log('mouse');
  }

  constructor(private _el: ElementRef) {
    console.log(_el.nativeElement);
  }

  OnInit() {
    console.log('OnInit');
  }

  sayHello() {
    this.myCustomEvent.emit(`Hi, ${this.name} ${this.surname} is talking now.`);
  }


}
