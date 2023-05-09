import { ReactiveFormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http'; // Nuevo: Importa HttpClientModule
import { AppComponent } from './app.component';
import { BillingAPIService } from '/var/lib/jenkins/workspace/prueba_0056/angular/projects/billingApp/src/services/swaggerbillingAPI/api/api'; // Asegúrate de que esta ruta sea correcta

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule, // Nuevo: Añade HttpClientModule aquí
        ReactiveFormsModule // Nuevo: Añade ReactiveFormsModule aquí
      ],
      declarations: [
        AppComponent
      ],
      providers: [BillingAPIService], // Añade el servicio aquí
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'billingApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('billingApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Listado de facturas');
  });
});
