/**
 * 环境变量控制
 */
const env = {
  // 开发服地址
  development: {
    MODE: 'development',
    ENV_API: 'http://localhost:3000'
  },
  // 生产服地址
  production: {
    MODE: 'production',
    ENV_API: 'http://127.0.0.1:3000'
  }
}

export default env
