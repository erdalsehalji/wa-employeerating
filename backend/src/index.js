import express from 'express';
import storage from './memory_storage'
import cors from 'cors'
import connect from './db.js'


const app = express() 
const port = 3002
app.use(cors())



app.get('/EmployeeCard', async (req, res) => {
    
    let db = await connect()
    let cursor = await db.collection("employees").find()
    let results = await cursor.toArray()
    console.log(results)

    res.json(results)
})


app.get('/AdminDashboard', async (req, res) => {

    let db = await connect()
    let cursor = await db.collection("employees").find()
    let results = await cursor.toArray()
    console.log(results)

    res.json(results)
})


app.get('/EmployeeCards', (req, res) => {
    let cards = storage.cards
    let query = req.query
    
    if(query._any) {
        let terms = query._any.split(" ")
        cards = cards.filter(employee => {
            let info = employee.signupName + " " + employee.signupSurname + " "
            + employee.signupAddress + " " + employee.signupAge + " " + employee.signupSex + " "
            + employee.signupEnterprise
            return terms.every(term => info.indexOf(term) >= 0)
        })
    }
    res.json(cards)
})


app.listen(port, () => console.log(`Slušam na portu ${port}!`))

