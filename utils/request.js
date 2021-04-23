// 异步回调请求
export const Http = ({ url, method = 'GET', data }) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method: method,
      data: {
        ...data
      },
      header: reqAuth.getHeader(),
      success: ({ data }) => {
        if (data && data.success) {
          resolve(data)
        } else if (data.code == 401) {
          wx.showToast({
            title: '登录失效，需要重新登录',
            duration: 1500,
            icon: 'none',
            mask: true
          })
          let timer = setTimeout(() => {
            app.toLogin()
            // clearTimeout(timer)
          }, 1500)
        } else if (data.code == 403) {
          // 重新登录
          wx.showToast({
            title: '登录失效，需要重新登录',
            duration: 1500,
            icon: 'none',
            mask: true
          })
          let timer = setTimeout(() => {
            app.toLogin()
          }, 1500)
        } else {
          reject(data)
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
