import { ReactiveFormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';  // Importa HttpErrorResponse
import { AppComponent } from './app.component';
import { BillingAPIService } from '/var/lib/jenkins/workspace/prueba_0056/angular/projects/billingApp/src/services/swaggerbillingAPI/api/api';

describe('AppComponent', () => {
  let httpMock: HttpTestingController;
  let billingService: BillingAPIService; 

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
    billingService = TestBed.inject(BillingAPIService);
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

describe('BillingAPIService', () => {
  let httpTestingController: HttpTestingController;
  let service: BillingAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BillingAPIService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BillingAPIService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

it('should get data', () => {
    const testData: any = {name: 'Test Data'}; 

    // Replace 'getData()' with the correct method
    service.getBillingData().subscribe(
      data => expect(data).toEqual(testData),
      error => fail('Should have succeeded but failed with ' + error)
    );

    const req = httpTestingController.expectOne('//billing'); 
    expect(req.request.method).toEqual('GET');
    req.flush(testData); 
  });

  it('should handle http error', () => {
    const emsg = 'deliberate 404 error';

    // Replace 'getData()' with the correct method
    service.getBillingData().subscribe(
      data => fail('Should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne('//billing');
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });
});
