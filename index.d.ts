export {};

import type { DB } from './types/DB';
import type { User } from './types/User';
import type { Response } from './types/Response';
import type { Mailer } from './types/Mailer';
import type { Util } from './types/Util';

declare global {
  const db: DB;
  const user: User;
  const response: Response;
  const mailer: Mailer;
  const util: Util;
}
