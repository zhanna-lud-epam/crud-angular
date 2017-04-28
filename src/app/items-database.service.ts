import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class ItemsDatabaseService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let items = [
      { id: 1, name: 'John', sex: 'male', birth: '1990' },
      { id: 2, name: 'Emmy', sex: 'female', birth: '1991' },
      { id: 3, name: 'Arthur', sex: 'male', birth: '1992' },
      { id: 4, name: 'Hermy', sex: 'female', birth: '1993' },
      { id: 5, name: 'Alan', sex: 'male', birth: '1994' }
    ];

    return { items };
  }

}
