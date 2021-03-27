/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-03-26 09:42:53
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-27 11:17:59
 */
// 部门管理
import https from '@/utils/https'
import { RootObject } from '@/model/rootObject'
import { ContentType, Method } from 'axios-mapper'

export const listDept = (data?: any) => {
  return https.request<RootObject<any>>('boss.system/dept/list', Method.GET, data, ContentType.form)
}

export const getDept = (deptId: any) => {
  return https.request<RootObject<any>>(`boss.system/dept/${deptId}`, Method.GET, undefined, ContentType.form)
}

export const listDeptExcludeChild = (deptId: any) => {
  return https.request<RootObject<any>>(`boss.system/dept/list/exclude/${deptId}`, Method.GET, undefined, ContentType.form)
}

export const delDept = (deptId: any) => {
  return https.request<RootObject<any>>(`boss.system/dept/${deptId}`, Method.DELETE, undefined, ContentType.form)
}

// 修改部门

export const updateDept = (data: any) => {
  return https.request<RootObject<any>>('boss.system/dept/', Method.PUT, data, ContentType.json)
}

// 新增部门

export const addDept = (data: any) => {
  return https.request<RootObject<any>>('boss.system/dept/', Method.POST, data, ContentType.json)
}

// 根据角色ID查询部门树结构

export const roleDeptTreeselect = (roleId: number | string) => {
  return https.request<any>(`boss.system/dept/roleDeptTreeselect/${roleId}`, Method.GET, undefined, ContentType.form)
}

// 查询部门下拉树结构

export const treeselect = () => {
  return https.request<RootObject<any>>('boss.system/dept/treeselect', Method.GET, undefined, ContentType.form)
}
