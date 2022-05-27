// 모듈 불러오기
const express = require('express')
const socket = require('socket.io')
const http = require('http')
const path = require('path')

// express 객체 [express를 실행한 내용을 변수에 저장]
const app = express()

// http 서버 생성
const server = http.createServer(app)

// 생성된 서버를 socket.io에 바인딩
const io = socket(server)
app.use(express.static(path.join(__dirname,'src')))




io.on('connection', (socket) =>{

    socket.on('chatting',(data)=>{
        console.log(data)
        io.emit('chatting',`${data}` )
    })
})

// port설정
const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`server is running ${PORT}`))