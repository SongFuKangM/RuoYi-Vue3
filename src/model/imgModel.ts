/*
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-02-03 15:06:18
 * @LastEditors: scy😊
 * @LastEditTime: 2021-02-04 09:29:18
 */
export interface SmsModel {
    img: string
    uuid: string
}

export interface ListTypeFace <T>{
    total: any
    rows: T
}
