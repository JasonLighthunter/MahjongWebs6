import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePreviewComponent } from './game-template-preview.component';

import { TileComponent } from '../../../tile/components/tile/tile.component';


describe('TemplatePreviewComponent', () => {
  let component: TemplatePreviewComponent;
  let fixture: ComponentFixture<TemplatePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileComponent, TemplatePreviewComponent,  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
