import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      //   setupFiles: './vitest.setup.mjs',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
      //   server: {
      //     deps: {
      //       inline: [/^(?!.*vitest).*$/] //TODO https://github.com/vitest-dev/vitest/issues/2806#issuecomment-1474468560
      //     }
      //   }
    }
  })
)
