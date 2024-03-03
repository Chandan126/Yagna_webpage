import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePictureDataComponent } from './profile-picture-data.component';

describe('ProfilePictureDataComponent', () => {
  let component: ProfilePictureDataComponent;
  let fixture: ComponentFixture<ProfilePictureDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePictureDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePictureDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
