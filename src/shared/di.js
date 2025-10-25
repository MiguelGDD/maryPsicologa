import { inject } from 'vue'

export const containerKey = Symbol('container')

export const useContainer = () => {
  const container = inject(containerKey)

  if (!container) {
    throw new Error('Container instance is not available in the current context')
  }

  return container
}

