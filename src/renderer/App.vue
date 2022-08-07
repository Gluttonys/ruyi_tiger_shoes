<template>
  <section class="flex">
    <MessList/>
    <MessageContent/>
  </section>
</template>

<script lang="ts" setup>
import {ipcRenderer} from './electron'
import MessList from './components/MessList/index.vue'
import MessageContent from './components/MessageContent/index.vue'

ipcRenderer.send('message', 'Hello from App.vue!');
</script>
