import { Role } from '@app/models/enums/role.enum';

export interface SignUpModel {
  id: number;
  username: string;
  email: string;
  password: string;
  organizationName: string;
  role: Role;
}
