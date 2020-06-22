import { TestBed , async} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeService } from './home.service';
import { of } from 'rxjs'


describe('HomeService', () => {

  let service: HomeService;
  let mock = require('../../mocks/weather/cities.json');
  
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));
beforeEach(() =>{
 service = TestBed.get(HomeService);
})
  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });

});
