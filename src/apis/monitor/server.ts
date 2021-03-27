/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-03-19 08:32:49
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-27 13:43:38
 */
import { RequestParams, Method, ContentType } from 'axios-mapper'
import https from '@/utils/https'
import { ServerData } from '@/model/monitor/server'
import { RootObject } from '@/model/rootObject'
// 查询服务器详细
export const getServer = (query?: RequestParams) => {
  return https.request<RootObject<ServerData>>('boss.monitor/server', Method.GET, query, ContentType.form)
}
