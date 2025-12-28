export {};

import type { DB } from './types/DB';

declare global {
  const db: DB;
}
