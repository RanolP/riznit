import { z } from 'zod';
import { make } from '..';

export const nat = make('nat', z.number(), (value: number) => value);
