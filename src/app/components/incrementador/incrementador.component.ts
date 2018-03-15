import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

// Este decorador permite obtener una referencia HTML independiente en un
// componente, por lo tanto así se utilice el componente, en este caso el incrementador
// en varias partes, siempre haya una referencia independiente para acceder a sus propiedades
// en el lado HTML se colocaría en este caso el identificador #txtProgress
  @ViewChild('txtProgress') txtProgres: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number>= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor) {

    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);

    this.txtProgres.nativeElement.focus();
  }

  onChanges( nuevoValor ) {

    // tslint:disable-next-line:prefer-const
    // let elemHTML: any = document.getElementsByName ( 'progreso' );
    // console.log ( this.txtProgres );

        // console.log ( 'Model evento: ', evento);
    if ( nuevoValor >= 100 ) {
      this.progreso = 100;
    }else if ( nuevoValor <= 0 ) {
      this.progreso = 0;
    }else {
      this.progreso = nuevoValor;
    }
    this.txtProgres.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

}
