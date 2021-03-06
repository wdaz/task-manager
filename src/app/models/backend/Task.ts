import { Status } from '@app/models/enums/status.enum';

export interface Task {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
  usersIds: Array<number>;
  organizationName: string;
}
