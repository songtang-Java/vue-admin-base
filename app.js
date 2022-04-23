const express = require('express')
const path = require('path')
const app = express()

// vue-router history模式引入connect-history-api-fallback中间件
const history = require('connect-history-api-fallback')
// 这句代码需要放在express.static上面
app.use(history())
app.use(express.static(path.join(__dirname, 'dist')))
app.listen(8902, () => {
    console.log('app listening on port 8902')
})
