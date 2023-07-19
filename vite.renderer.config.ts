import { join, resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config
export default defineConfig(({ mode }) => {
  const root = join(__dirname, 'src', 'renderer')

  return {
    root,
    plugins: [react()],
  }
})
