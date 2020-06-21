import { TestBed , async} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeService } from './home.service';
import { of } from 'rxjs'


describe('HomeService', () => {

  let service: HomeService;
  let mock = require('../../mocks/cities.json');
  class HomeServiceSpy {
    
    getCityList = jasmine.createSpy('getCityList').and.returnValue(of([{id:2759794}]));
  
    getCityDetails = jasmine.createSpy('getCityDetails').and.returnValue(of(mock));
  }
 
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[
      {provide:HomeService, useClass :HomeServiceSpy} 
    ]
  }));
beforeEach(() =>{
 service = TestBed.get(HomeService);
})
  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });

  it('should call the getCities method when called', () => {
    let list = service.getCityList();
    list.subscribe(res => {
      expect(res.length).toBe(1);
    })
  });

  it('should call the details when citiId is given', () => {
    let details = service.getCityDetails(['12345']);
    details.subscribe(res => {
      expect(res['list'].length).toBe(1);
      expect(res).not.toBe(null);
    })
  })


});
