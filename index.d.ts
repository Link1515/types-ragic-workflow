export {};

import type { DB } from './types/DB';
import type { User } from './types/User';
import type { Response } from './types/Response';

declare global {
  const db: DB;
  const user: User;
  const response: Response;
}
