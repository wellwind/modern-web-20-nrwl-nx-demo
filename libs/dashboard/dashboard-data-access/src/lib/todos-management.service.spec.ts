import { TestBed } from '@angular/core/testing';

import { TodosManagementService } from './todos-management.service';

describe('TodosManagementService', () => {
  let service: TodosManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
