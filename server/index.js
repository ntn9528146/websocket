const httpServer = app.listen(PORT, ()=>{
    console.log(`Server is now listening to PORT ${PORT}`)

});
const io = new Server(httpServer, {
    cors:{
        origin:"*"
    }
})

io.on("connection", (socket)=> {
    console.log(`User ${socket.io} is connected`)
})