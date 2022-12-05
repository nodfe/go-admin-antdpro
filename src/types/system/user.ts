export interface UserListItem {
    userId: number;
    username: string;
    nickName: string;
    phone: string;
    roleId: number;
    avatar: string;
    sex: string;
    email: string;
    deptId: number;
    postId: number;
    remark: string;
    status: string;
    deptIds: number[];
    postIds: number[];
    roleIds: number[];
    dept: Dept;
    createBy: number;
    updateBy: number;
    createdAt: string;
    updatedAt: string;
}
  
interface Dept {
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
    children?: any;
}