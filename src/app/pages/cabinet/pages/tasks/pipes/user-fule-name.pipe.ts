import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@app/models/backend/User';

@Pipe({
  name: 'userFuleName',
})
export class UserFuleNamePipe implements PipeTransform {
  transform(id: number, users: User[]): unknown {
    if (id && users) {
      const user = users.find((u) => u.id === id);
      return user?.name + ' ' + user?.surname;
    }
    return null;
  }
}
