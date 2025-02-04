const express = require("express")
const app = express()

app.use(express.json())

app.post("/signup", async(req,res)=>{
    try {
        const {name,email, password} = req.body;
        if (!name){
            return res.status(400).send("aaa")
        }
        if (!email){
            return res.status(400).send("aaa")
        }
        if (!password){
            return res.status(400).send("aaa")
        }
        if (password.length > 16 || password.length < 4){
            return res.status(400).send("aaa")
        }
        const newUser = new wercfewc({name,email, password})
        await newUser.save()
        return res.status(200).send(newUser)
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(8080,()=>{
    console.log(`Server is running at 8080`)
})








