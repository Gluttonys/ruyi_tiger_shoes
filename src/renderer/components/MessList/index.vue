<template>
  <section class="message-wrapper w-96 p-2 pb-36 h-screen overflow-y-auto">
    <MessageItem v-for="item in messageList" :key="item.uuid" :message="item"/>

    <footer class="footer w-96">
      <section class="tools mb-2 flex items-center">
        <p>工具一</p>
        <p>工具二</p>
        <p>工具三</p>
        <p>工具四</p>
      </section>

      <textarea v-model="content" @keydown.enter="handleOk"/>
    </footer>
  </section>
</template>

<script lang="ts" setup>

import {computed, ref, toRaw} from "vue";
import {v4 as uuidV4} from 'uuid'
import MessageItem from './MessageItem/index.vue'
import {getNow} from "../../utils/common";
import {message} from "ant-design-vue";
import useMessageData from "../../store/message";

const messageData = useMessageData()
const content = ref("")

const messageList = computed<Project.Message[]>(() => messageData.messageList)


/**
 * @desc 提交信息
 */
const handleOk = () => {
  const tempData: Project.Message = {
    uuid: uuidV4(),
    time: getNow(),
    content: toRaw(content.value)
  }

  messageList.value.unshift(tempData)
  content.value = ""
  message.success("添加成功")
}

</script>

<style lang="less" scoped>
.message-wrapper {
  background-color : #000000;
  position         : relative;
}

.footer {
  position                : fixed;
  bottom                  : 0;
  left                    : 0;
  height                  : 100px;
  border-top-left-radius  : 8px;
  border-top-right-radius : 8px;
  border-top              : 4px solid #3c3620;
  background-color        : #3b3939;
  box-shadow              : 0 0 20px 0 #0f0202;

  padding                 : 4px;

  .tools {
    color : #ffffff;

    p {
      margin-right     : 12px !important;
      height           : 20px;
      background-color : rebeccapurple;
    }
  }

  textarea {
    width         : 100%;
    height        : 60px;
    outline       : none;
    border-radius : 3px;
    padding       : 4px;
    resize        : none
  }
}

</style>
