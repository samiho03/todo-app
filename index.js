const app = require("./app")

const PORT = process.env.PORT || 8000               //Optional port => if the port is missing then it will recieve this 8000 port

//listen server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})