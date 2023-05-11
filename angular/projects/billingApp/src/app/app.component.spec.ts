// app.component.spec.ts
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BillingAPIService } from '/var/lib/jenkins/workspace/prueba_0056/angular/projects/billingApp/src/services/swaggerbillingAPI/api/api'; // Asegúrate de importar tu servicio

describe('AppComponent', () => {
  let billingAPIService: BillingAPIService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        BillingAPIService // Añade tu servicio a la lista de proveedores
      ]
    }).compileComponents();

    // Inicializa el servicio utilizando TestBed
    billingAPIService = TestBed.inject(BillingAPIService);
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
    expect(compiled.querySelector('.content span').textContent).toContain('billingApp app is running!');
  });

  it('should call the getBillingInformation method on service', () => {
    // Arranque: Crea un espía para el método que queremos observar
    const getBillingInformationSpy = spyOn(billingAPIService, 'getBillingInformation');

    // Act: Llama al método que estamos probando
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    // Afirmar: Verifica si el método del servicio fue llamado
    expect(getBillingInformationSpy).toHaveBeenCalled();
  });
});
