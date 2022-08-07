/**
 * @file 存放全局公共数据集合
 *
 * @desc 官方文档
 * @link https://pinia.web3doc.top/getting-started.html
 */

import {defineStore} from "pinia";

type MessageDataType = {
  messageList: Project.Message[]
}


const useMessageData = defineStore("messageData", {
  state: (): MessageDataType => {
    return {
      messageList: []
    }
  }
})


export default useMessageData
