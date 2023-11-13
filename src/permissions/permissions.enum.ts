import { User } from '../users/entities/user.entity';
import { AnyObject } from '@casl/ability/dist/types/types';
import { Permission as PermissionEntity } from './entities/permission.entity';

type Permission<T = AnyObject> = Pick<
  PermissionEntity<T>,
  'action' | 'subject' | 'conditions'
>;

export const AUTH_EMAIL_SIGN_UP: Permission = {
  action: 'email-sign-up',
  subject: 'auth',
} as const;

export const AUTH_EMAIL_SIGN_IN: Permission = {
  action: 'email-sign-in',
  subject: 'auth',
} as const;

export const AUTH_EMAIL_SIGN_OUT: Permission = {
  action: 'email-sign-out',
  subject: 'auth',
} as const;

export const USER_UPDATE_OWN_PROFILE: Permission<User> = {
  action: 'update-own-profile',
  subject: 'user',
  conditions: {
    id: '${user.id}',
  },
} as const;

export const Permissions = {
  AUTH_EMAIL_SIGN_UP,
  AUTH_EMAIL_SIGN_IN,
  AUTH_EMAIL_SIGN_OUT,
  USER_UPDATE_OWN_PROFILE,
} as const;
