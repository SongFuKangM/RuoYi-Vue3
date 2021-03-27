/*
 * @Description: 在线用户接口
 * @Author: ZY
 * @Date: 2021-02-22 15:22:48
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-27 11:09:46
 */

import { RequestParams, Method, ContentType } from 'axios-mapper'
import https from '@/utils/https'
import { OnlineUserModel } from '@/model/monitor/onlineUserModel'
import { RootPageObject } from '@/model/rootPageModel'

// 查询在线用户列表
export const list = (query: RequestParams) => {
  return https.request<RootPageObject<OnlineUserModel>>('system/online/list', Method.GET, query, ContentType.form)
}

// 强退用户
export const forceLogout = (tokenId: string) => {
  return https.request<RootPageObject<OnlineUserModel>>(`system/online/${tokenId}`, Method.DELETE)
}
