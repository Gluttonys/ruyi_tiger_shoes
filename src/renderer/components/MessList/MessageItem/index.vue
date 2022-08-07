<template>
  <figure class="message-item">

    <figcaption v-show="isEqual(mode, 'view')" class="content mb-2" @dblclick="handleDouble" v-text="message.content"/>
    <textarea v-show="isEqual(mode, 'edit')" v-model="message.content" class="content-input" type="text"
              @blur="mode = 'view'"/>

    <footer class="flex items-center justify-between">
      <p class="time" v-text="message.time"/>

      <section class="flex items-center">
        <a-popconfirm
            cancel-text="取消"
            ok-text="确认删除"
            title="确认删除该日志?"
            @confirm="confirmDel"
        >
          <p class="btn text-red-600 hover:text-yellow-200 transition  cursor-pointer">删除</p>
        </a-popconfirm>

      </section>
    </footer>

  </figure>
</template>

<script lang="ts" setup>

import {computed, defineProps, ref} from "vue";
import {isEqual, remove} from "lodash";
import useMessageData from "../../../store/message";

type Prop = {
  message: Project.Message
}

type Mode = "view" | "edit"

const messageData = useMessageData()
const mode = ref<Mode>('view')

const props = withDefaults(defineProps<Prop>(), {
  message: () => ({
    uuid: '',
    time: '',
    content: ''
  })
})

const message = computed(() => props.message)

const handleDouble = () => {
  mode.value = isEqual(mode.value, 'view') ? 'edit' : 'view'
}

const confirmDel = () => remove(messageData.messageList, {uuid: message.value.uuid})

</script>


<style lang="less" scoped>
.message-item {
  background-color : #1b1a1a;
  background-image : linear-gradient(45deg, #1b1a1a, rgba(73, 68, 55, 0.5));

  border-bottom    : 4px solid #a18f56;
  border-radius    : 4px;
  margin-bottom    : 8px;
  padding          : 8px 4px;
  text-align       : left;
  color            : #a18f56;
  letter-spacing   : 1px;
  font-weight      : 100;

  .content {
  }

  .content-input {
    width         : 100%;
    min-height    : 4em;
    max-height    : 8em;
    margin-bottom : 4px;
    outline       : none;
    border        : 1px solid #a18f56;
    border-radius : 4px;
    color         : #1b1a1a;
    padding       : 8px;
  }

  .time {
    color : #a18f5690;
  }
}


</style>
