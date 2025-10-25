import './assets/main.css'

import { createApp } from 'vue'

import { createContainer } from '@/infrastructure/di/container'
import { containerKey } from '@/shared/di'

import App from './App.vue'

const app = createApp(App)
const container = createContainer()

app.provide(containerKey, container)

app.mount('#app')
