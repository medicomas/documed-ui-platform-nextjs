export type Role = 'ADMIN' | 'BACKOFFICE' | 'DOCTOR';
export type Permission = 'dashboard';

export type RolePermission = {
  role: Role;
  permission: Permission[];
};
