import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
    plugins: [
        vue(),
        splitVendorChunkPlugin()
    ],
    server: {
        port: 3000,
        open: true
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        // 生产环境构建配置
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    'vue-vendor': ['vue', 'vue-router', 'pinia'],
                    'ui-vendor': ['bootstrap', '@fortawesome/fontawesome-free'],
                    'utils': ['nprogress']
                }
            }
        },
        // 资源压缩配置
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        },
        assetsDir: 'assets',
        // 确保图片资源被正确处理
        assetsInlineLimit: 4096,
        // 启用 CSS 代码分割
        cssCodeSplit: true,
        // 启用预加载
        preload: true
    },
    css: {
        // CSS 预处理器配置
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/css/variables.scss";`
            }
        },
        // 启用 CSS 模块
        modules: {
            localsConvention: 'camelCase'
        }
    },
    // 配置静态资源处理
    publicDir: 'public',
    // 优化依赖预构建
    optimizeDeps: {
        include: ['vue', 'vue-router', 'pinia', 'bootstrap', '@fortawesome/fontawesome-free', 'nprogress']
    }
})