/*
 * @Description: 路由相关
 * @Author: ZY
 * @Date: 2021-02-02 11:54:00
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-27 11:10:05
 */

import https from '@/utils/https'
// import { ContentType, Method } from 'axios-mapper'
import { RootObject } from '@/model/rootObject'
import { RemoteRoute } from '@/model/remoteRouteModel'

export const getRoutesList = () => {
  return https.request<RootObject<RemoteRoute[]>>('boss.system/menu/getRouters')
}
