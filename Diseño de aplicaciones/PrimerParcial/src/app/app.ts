import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  productoForm: FormGroup;
  resumen: any = null;

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      detalles: this.fb.group({
        precio: [null, [Validators.required, Validators.min(0.01)]],
        cantidad: [null, [Validators.required, this.multiplo10Validator()]]
      }),
      categoria: ['', Validators.required],
      oferta: [false],
      descuento: [{ value: null, disabled: true }]
    });

    // Habilitar / deshabilitar descuento según oferta
    this.productoForm.get('oferta')?.valueChanges.subscribe(oferta => {
      const descuentoCtrl = this.productoForm.get('descuento');
      if (oferta) {
        descuentoCtrl?.enable();
        descuentoCtrl?.setValidators([
          Validators.required,
          Validators.min(5),
          Validators.max(50)
        ]);
      } else {
        descuentoCtrl?.disable();
        descuentoCtrl?.clearValidators();
        descuentoCtrl?.setValue(null);
      }
      descuentoCtrl?.updateValueAndValidity();
    });
  }

  // ✅ Validador personalizado: múltiplo de 10
  multiplo10Validator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value != null && value % 10 !== 0) {
        return { multiplo10: true };
      }
      return null;
    };
  }

  submit() {
    if (this.productoForm.valid) {
      const { nombre, categoria, detalles, oferta, descuento } = this.productoForm.value;
      const precio = detalles.precio;
      const cantidad = detalles.cantidad;

      let precioFinal = precio;
      if (oferta && descuento) {
        precioFinal = precio - (precio * descuento / 100);
      }

      this.resumen = {
        nombre,
        categoria,
        precio,
        cantidad,
        oferta: oferta ? `Sí (${descuento}%)` : 'No',
        precioFinal
      };
    }
  }

  get nombre() { return this.productoForm.get('nombre'); }
  get precio() { return this.productoForm.get('detalles.precio'); }
  get cantidad() { return this.productoForm.get('detalles.cantidad'); }
  get categoria() { return this.productoForm.get('categoria'); }
  get oferta() { return this.productoForm.get('oferta'); }
  get descuento() { return this.productoForm.get('descuento'); }
}