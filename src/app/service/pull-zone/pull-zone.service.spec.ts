import { TestBed } from '@angular/core/testing';

import { PullZoneService } from './pull-zone.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {PullZone} from "../../models/pull-zone.model";
import {TierType} from "../../models/tier-type.enum";

describe('PullZoneService', () => {
  let service: PullZoneService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PullZoneService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PullZoneService);
  });

  it('should get pull zones', () => {
    // given
    const response = aPullZoneListResource();

    // when
    const observable = service.getPullZones();

    // then
    observable.subscribe(data => {
      expect(data).toBe(response)
    });
    const req = httpTestingController.expectOne('https://api.bunny.net/pullzone');
    expect(req.request.method).toEqual('GET');
    req.flush(response);
    httpTestingController.verify();

  });

  it('should get a pull zone with provided id', () => {
    // given
    const id = 100;
    const response = aPullZoneResource();

    // when
    const observable = service.getPullZone(id);

    // then
    observable.subscribe(data => {
      expect(data).toBe(response);
    });
    const req = httpTestingController.expectOne('https://api.bunny.net/pullzone/100');
    expect(req.request.method).toEqual('GET');
    req.flush(response);
    httpTestingController.verify();
  });

  it('should create a pull zone', () => {
    const request = {
      Name: 'Test 01',
      OriginUrl: 'https://test01.com',
      Type: TierType.Standard,
      EnableGeoZoneUS: true,
      EnableGeoZoneEU: true,
      EnableGeoZoneASIA: true,
      EnableGeoZoneSA: true,
      EnableGeoZoneAF: true,
    } as PullZone;

    const response = {
      Id: 1,
      Name: 'Test 01',
      OriginUrl: 'https://test01.com',
      Type: TierType.Standard,
      MonthlyBandwidthUsed: 0,
      MonthlyCharges: 0,
      EnableGeoZoneUS: true,
      EnableGeoZoneEU: true,
      EnableGeoZoneASIA: true,
      EnableGeoZoneSA: true,
      EnableGeoZoneAF: true,
    } as PullZone;

    // when
    const result$ = service.createPullZone(request);

    // then
    result$.subscribe(data => {
      expect(data).toBe(response);
    });
    const req = httpTestingController.expectOne('https://api.bunny.net/pullzone');
    expect(req.request.method).toEqual('POST');
    req.flush(response);
    httpTestingController.verify();
  });

  function aPullZoneListResource(): PullZone[] {
    return [
      {
        Id: 1,
        Name: 'Oriki',
        OriginUrl: 'https://oriki.com',
        Type: TierType.Standard,
        MonthlyBandwidthUsed: 5697879,
        MonthlyCharges: 65000,
        EnableGeoZoneUS: true,
        EnableGeoZoneEU: true,
        EnableGeoZoneASIA: true,
        EnableGeoZoneSA: true,
        EnableGeoZoneAF: true,
      } as PullZone,
      {
        Id: 2,
        Name: 'Google',
        OriginUrl: 'https://googlenigeria.com',
        Type: TierType.Volume,
        MonthlyBandwidthUsed: 43453567,
        MonthlyCharges: 645600,
        EnableGeoZoneUS: false,
        EnableGeoZoneEU: true,
        EnableGeoZoneASIA: false,
        EnableGeoZoneSA: true,
        EnableGeoZoneAF: true,
      } as PullZone,
      {
        Id: 3,
        Name: 'Amazon',
        OriginUrl: 'https://amazon.com.us',
        Type: TierType.Standard,
        MonthlyBandwidthUsed: 5745757,
        MonthlyCharges: 567567000,
        EnableGeoZoneUS: true,
        EnableGeoZoneEU: true,
        EnableGeoZoneASIA: false,
        EnableGeoZoneSA: true,
        EnableGeoZoneAF: false,
      } as PullZone,
      {
        Id: 4,
        Name: 'Facebook',
        OriginUrl: 'https://facebook.com',
        Type: TierType.Standard,
        MonthlyBandwidthUsed: 3453453,
        MonthlyCharges: 350000.7678,
        EnableGeoZoneUS: false,
        EnableGeoZoneEU: true,
        EnableGeoZoneASIA: false,
        EnableGeoZoneSA: true,
        EnableGeoZoneAF: true,
      } as PullZone,
      {
        Id: 5,
        Name: 'Tesla',
        OriginUrl: 'https://tesla.com',
        Type: TierType.Volume,
        MonthlyBandwidthUsed: 565655767,
        MonthlyCharges: 760000,
        EnableGeoZoneUS: true,
        EnableGeoZoneEU: true,
        EnableGeoZoneASIA: false,
        EnableGeoZoneSA: true,
        EnableGeoZoneAF: true,
      } as PullZone,
    ];
  }

  function aPullZoneResource(): PullZone {
    return {
      Id: 100,
      Name: 'Oriki',
      OriginUrl: 'https://oriki.com',
      Type: TierType.Standard,
      MonthlyBandwidthUsed: 5697879,
      MonthlyCharges: 65000,
      EnableGeoZoneUS: true,
      EnableGeoZoneEU: true,
      EnableGeoZoneASIA: true,
      EnableGeoZoneSA: true,
      EnableGeoZoneAF: true,
    } as PullZone;
  }

});
