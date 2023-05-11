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
  let httpTestingController: HttpTestingController;
  let service: YourService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [YourService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(YourService);
  });

  afterEach(() => {
    httpTestingController.verify();  // Ensure that there are no outstanding requests.
  });

  it('should get data', () => {
    const testData: Data = {name: 'Test Data'};  // Define the data you expect to get from the request.

    // Make an HTTP GET request, and expect that it returns the test data.
    service.getData().subscribe(
      data => expect(data).toEqual(testData),
      error => fail('Should have succeeded but failed with ' + error)
    );

    // At this point, the request is pending, and no response has been sent.
    // The next step is to expect that the request happened, and to simulate the response.

    const req = httpTestingController.expectOne('//billing');  // This is the URL you expect your service to hit.

    expect(req.request.method).toEqual('GET');

    req.flush(testData);  // Simulate a response with the test data.
  });

  it('should handle http error', () => {
    const emsg = 'deliberate 404 error';

    service.getData().subscribe(
      data => fail('Should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne('//billing');

    req.flush(emsg, { status: 404, statusText: 'Not Found' });  // Simulate an error response.
  });
});
