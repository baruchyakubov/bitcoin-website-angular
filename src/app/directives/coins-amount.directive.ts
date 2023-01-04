import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appCoinsAmount]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CoinsAmountDirective, multi: true }]
})
export class CoinsAmountDirective implements Validator {
  @Input('appCoinsAmount') coinsAmount!: number
  validate(control: AbstractControl): { [key: string]: any } | null {
    return (control.value > this.coinsAmount) ? { 'CoinsAmount': true } : null
  }


  constructor() { }

}
