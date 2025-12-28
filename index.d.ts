export {};

import type { DB } from './types/DB';
import type { User } from './types/User';

declare global {
  const db: DB;
  const user: User;
}
