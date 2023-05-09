const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    development: {
        baseApi: "/api",
        mockApi:"https://www.fastmock.site/mock/3394f3507e921c4b63728ecfaa5118fb/admin"
    },
    test: {
        baseApi: '//test.future.com/api',
        mockApi:"https://www.fastmock.site/mock/3394f3507e921c4b63728ecfaa5118fb/admin"
    },
    testapi: {
        baseApi: '//future.com/api',
        mockApi:"https://www.fastmock.site/mock/3394f3507e921c4b63728ecfaa5118fb/admin"
    }
}

export default {
    env,
    // mock的总开关,
    mock: false,
    ...EnvConfig[env]
  }