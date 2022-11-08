import { SiteDevice } from './../../../model/site/site-device-model';
import { BsModalService } from 'ngx-bootstrap/modal';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  NgZone,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeviceResponse } from 'src/app/model/device/device-model';
import { ManagementService } from 'src/app/services/user/management.service';

@Component({
  selector: 'app-mdl-device-list',
  templateUrl: './mdl-device-list.component.html',
  styleUrls: ['./mdl-device-list.component.scss'],
})
export class MdlDeviceListComponent implements OnInit, AfterViewInit {
  @ViewChild('step1') step1!: ElementRef<HTMLDivElement>;
  @ViewChild('step2') step2!: ElementRef<HTMLDivElement>;
  @Input() siteId = null;
  @Input() siteDevice?: SiteDevice;
  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() address!: string;
  @Output() onSetDeviceToSite: EventEmitter<any> = new EventEmitter<any>();
  searchText?: string;
  deviceId?: string;
  deviceResp: DeviceResponse | undefined;
  map: any;
  mapClickListener: any;
  constructor(
    private managementService: ManagementService,
    private modalService: BsModalService,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    if (this.siteDevice?.siteDeviceId == null) {
      this.getGeoLocation(this.address).subscribe((data: any) => {
        this.latitude = data.lat();
        this.longitude = data.lng();
      });
      this.onSearch();
    } else {
      this.deviceId = this.siteDevice.deviceId;
    }
  }

  onSearch() {
    this.managementService
      .getUnAssignedDeviceList(this.searchText)
      .subscribe((data: DeviceResponse) => {
        this.deviceResp = data;
      });
  }

  onChoose(deviceId: string) {
    this.deviceId = deviceId;
  }

  onClickGoToSecondStep() {
    this.step1.nativeElement.style.display = 'none';
    this.step2.nativeElement.style.display = 'block';
  }

  onClickGoBack() {
    this.step2.nativeElement.style.display = 'none';
    this.step1.nativeElement.style.display = 'block';
  }

  mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener(
      'click',
      (e: google.maps.MouseEvent) => {
        this.zone.run(() => {
          this.latitude = e.latLng.lat();
          this.longitude = e.latLng.lng();
        });
      }
    );
  }

  getGeoLocation(address: string): Observable<any> {
    let geocoder = new google.maps.Geocoder();
    return Observable.create((observer: any) => {
      geocoder.geocode(
        {
          address: address,
        },
        (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            observer.next(results[0].geometry.location);
            observer.complete();
          } else {
            observer.error();
          }
        }
      );
    });
  }

  onSaveSiteDevice() {
    const model = {
      siteDeviceId: this.siteDevice?.siteDeviceId,
      siteId: this.siteId,
      lat: this.latitude,
      long: this.longitude,
      deviceId: this.deviceId,
    };
    this.managementService
      .setSiteDevice(model)
      .subscribe((data: DeviceResponse) => {
        this.onSetComplete();
      });
  }

  onSetComplete() {
    this.onSetDeviceToSite.emit();
  }

  ngAfterViewInit(): void {
    if (this.siteDevice?.siteDeviceId != null) this.onClickGoToSecondStep();
  }
}
