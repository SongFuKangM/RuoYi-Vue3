/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-03-19 08:32:49
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-27 11:18:11
 */

import { RootObject } from '@/model/rootObject'
import https from '@/utils/https'
import { ContentType, Method } from 'axios-mapper'
interface Treeselect{
  code: number
  msg: string
  menus: []
}
export const roleMenuTreeselect = (roleId?: number | string) => {
  return https.request<Treeselect>(`boss.system/menu/roleMenuTreeselect/${roleId}`, Method.GET, undefined, ContentType.form)
}

export const treeselect = () => {
  return https.request<RootObject<any>>('boss.system/menu/treeselect', Method.GET, undefined, ContentType.form)
}
