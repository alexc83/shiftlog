import { TestBed } from '@angular/core/testing';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../../../../environments/environment.development';
import { ShiftDataService } from './shift-data.service';

describe('ShiftDataService', () => {
  let service: ShiftDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
      ],
    });
    service = TestBed.inject(ShiftDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
