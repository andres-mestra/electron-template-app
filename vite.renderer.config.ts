import { join } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config
export default defineConfig(({ mode }) => {
  const root = join(__dirname, 'src', 'renderer')

  return {
    root,
    plugins: [tsconfigPaths(), react()],
  }
})
