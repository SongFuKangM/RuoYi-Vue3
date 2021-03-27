/*
 * @Description: 权限先关接口
 * @Author: ZY
 * @Date: 2021-01-12 16:37:09
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-27 11:17:28
 */

import { RolesModels } from '@/model/getRolesModel'
import { RootObject } from '@/model/rootObject'
import { Routes } from '@/model/routesModel'
import https from '@/utils/https'
import { RequestParams, ContentType, Method } from 'axios-mapper'

export const getRoutes = () => {
  return https.request<RootObject<Routes>>('boss.system/role/getRoutes', Method.GET, undefined, ContentType.form)
}

export const getRoles = () => {
  return https.request<RootObject<RolesModels>>('boss.system/role/getRoles', Method.GET, undefined, ContentType.form)
}

export const delRole = (id: number) => {
  return https.request<RootObject<string>>('boss.system/role/deleteRole', Method.DELETE, { id }, ContentType.form)
}

export const updateRole = (id: number, data: any) => {
  return https.request<RootObject<any>>(`boss.system/role/updateRole/${id}`, Method.POST, data, ContentType.form)
}

export const createRole = (role: RequestParams) => {
  return https.request<RootObject<any>>('boss.system/role/createRole', Method.PUT, role, ContentType.form)
}
