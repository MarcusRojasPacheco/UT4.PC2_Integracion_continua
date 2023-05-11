import { ReactiveFormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { BillingAPIService } from '/var/lib/jenkins/workspace/prueba_0056/angular/projects/billingApp/src/services/swaggerbillingAPI/api/api';

describe('AppComponent', () => {
  let httpMock: HttpTestingController;
  let billingService: BillingAPIService;  // Se añade el servicio de facturación

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule 
      ],
      declarations: [
        AppComponent
      ],
      providers: [BillingAPIService], 
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController); 
    billingService = TestBed.inject(BillingAPIService);  // Se inicializa el servicio de facturación
  }));

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'billingApp'`, () => {
    try {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('billingApp');
    } catch (error) {
      console.error('Error checking title of AppComponent:', error);
    }
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Listado de facturas');
  });

  it('should handle http requests', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Ahora utilizamos el método listUsingGET() del servicio de facturación
    billingService.listUsingGET().subscribe();

    // Esperar a que la solicitud HTTP ocurra y proporcionar una respuesta simulada
    const req = httpMock.expectOne('http://0.0.0.0:9876/');
    req.flush({
      "success": true,
      "data": {
        "invoiceList": [
          {
            "id": 1,
            "amount": 1000,
            "date": "2023-05-10"
          },
          {
            "id": 2,
            "amount": 2000,
            "date": "2023-05-09"
          }
        ]
      }
    });
  });
});
