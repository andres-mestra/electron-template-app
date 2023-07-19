import { join } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config
export default defineConfig(() => {
  const root = join(__dirname, 'src', 'preload')

  return {
    root,
  }
})
