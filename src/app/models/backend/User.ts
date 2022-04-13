import { Role } from '@app/models/enums/role.enum';

export interface User {
  id?: number;
  username: string;
  name: string;
  surname: string;
  email: string;
  organizationName: string;
  role: Role;
}
