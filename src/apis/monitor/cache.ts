/*
 * @Description: 定时任务的接口
 * @Author: ZY
 * @Date: 2021-02-22 20:02:15
 * @LastEditors: WJM
 * @LastEditTime: 2021-03-26 10:16:52
 */

import { Method, ContentType } from 'axios-mapper'
import https from '@/utils/https'
import { CacheData } from '@/model/monitor/cathe'
import { RootObject } from '@/model/rootObject'

// 查询缓存详细
export const getCache = () => {
  return https.request<RootObject<CacheData>>('boss.monitor/cache', Method.GET, undefined, ContentType.form)
}
