export {};

import type { DB } from './types/DB';
import type { User } from './types/User';
import type { Response } from './types/Response';
import type { Mailer } from './types/Mailer';
import type { Util } from './types/Util';
import type { Account } from './types/Account';
import type { Param } from './types/Param';
import type { Approval } from './types/Approval';

declare global {
  const db: DB;
  const user: User;
  const response: Response;
  const mailer: Mailer;
  const util: Util;
  const account: Account;
  const param: Param;
  const approval: Approval;
}
