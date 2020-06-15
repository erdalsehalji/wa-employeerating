import express from 'express';
import storage from './memory_storage'
import connect from './db.js'
import auth from './auth.js'

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express() 
const port = 3002
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//KREIRANJE USERA
app.post("/Register", async (req, res, next) => {
    let user = req.body
    
    let id
    try {
         id = await auth.registerUser(user)
    }
    catch(e) {
        res.status(500).json({ error: e.message })
    }
  
    res.json({id: id}) 
})
 
//LISTA SVIH ZAPOSLENIKA I PRETRAGA PO _ANY
app.get('/EmployeeCards', async (req, res) => {
    let db = await connect()
    let query = req.query

    let selection = {}

    if (query._any) {
        let search = query._any
        let terms = search.split(" ")
        let atributes = ["signupName", "signupSurname", "signupEnterprise",
         "signupAddress", "signupCity", "signupPosition"]

        selection = {
            $and: []
        }
   
        terms.forEach(term => {
            console.log("prva loop : ", term)
            let or = { 
                $or: []
            }
            atributes.forEach(atribut => {
                ("console log druga petlja: ", atribut)
                or.$or.push({[atribut]: new RegExp(term)})
            })
            selection.$and.push(or)
        })
    }

    let cursor = await db.collection("employees").find(selection)
    let results = await cursor.toArray()

    res.json(results)
})
/*
//ADMINDASHBOARD I SEARCH U NJEMU
app.get('/AdminDashboard', async (req, res) => {
    let db = await connect()
    let query = req.query

    let selection = {}

    if (query._any) {
        let search = query._any
        let terms = search.split(" ")
        let atributes = ["signupName", "signupSurname", "signupEnterprise",
         "signupAddress", "signupCity", "signupPosition"]

        selection = {
            $and: []
        }
   
        terms.forEach(term => {
            console.log("prva loop : ", term)
            let or = { 
                $or: []
            }
            atributes.forEach(atribut => {
                ("console log druga petlja: ", atribut)
                or.$or.push({[atribut]: new RegExp(term)})
            })
            selection.$and.push(or)
        })
    }

    let cursor = await db.collection("employees").find(selection)
    let results = await cursor.toArray()

    res.json(results)
})
 */


app.get('/EmployeeCard', (req, res) => {
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

app.get('/AdminDashboard', (req, res) => {
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

