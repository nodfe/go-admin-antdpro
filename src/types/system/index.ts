export interface RoleListItem {
  roleId: number;
  roleName: string;
  status: string;
  roleKey: string;
  roleSort: number;
  flag: string;
  remark: string;
  admin: boolean;
  dataScope: string;
  params: string;
  menuIds?: any;
  deptIds?: any;
  sysDept?: any;
  sysMenu: any[];
  createBy: number;
  updateBy: number;
  createdAt: string;
  updatedAt: string;
  // label, value用于前端select组件
  label: string;
  value: string;
}

export interface StatusOptions {
  label: string;
  value: string;
}

export interface DepartmentTreeItem {
  deptId: number;
  parentId: number;
  deptPath: string;
  deptName: string;
  sort: number;
  leader: string;
  phone: string;
  email: string;
  status: number;
  createBy: number;
  updateBy: number;
  createdAt: string;
  updatedAt: string;
  dataScope: string;
  params: string;
  children: DepartmentTreeItem[];
}
