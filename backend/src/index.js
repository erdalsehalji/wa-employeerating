import dotenv from 'dotenv'
dotenv.config()
import express from 'express';

import connect from './db.js'
import auth from './auth.js'

import mongo from 'mongodb'

const bodyParser = require('body-parser')
const cors = require('cors')
const app = express() 
const port = 3002
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let checkAttributes = (data) => {
    if(!data.signupName || !data.signupSurname || !data.signupAge
        || !data.signupSex || !data.signupAddress || !data.signupPosition
        || !data.signupEnterprise || !data.signupCity) {
            return false
            }
            return true
        }


app.post('/AdminDashboard/delete/:id',async(req,res)=>{
        let id = req.params.id
        let db = await connect();
        let cursor = await db.collection("employees").deleteOne({ _id:mongo.ObjectID(id)})
        let results = await cursor
        res.json('Employee is deleted!')
        })


//izmjena dijela dokumenta
 app.patch('/AdminDashboard/updateonlyone/:id', async (req, res) => {
        let id = req.params.id
        let data = req.body
        delete data._id
    
        let db = await connect()

        let result = await db.collection('employees').updateOne({_id: mongo.ObjectId(id)}, 
            {
                $set: data
            })

        if(result && result.modifiedCount == 1) {
                let doc = await db.collection("employees").findOne({_id: mongo.ObjectId(id)})
                res.json(doc)
        }
       else {
            res.json({
            status: 'fail'
            })
            }
        })

// izmjena cijelog dokumenta
app.put('/AdminDashboard/updateone/:id', async (req, res) => {
    let id = req.params.id
    let data = req.body
    delete data._id

    let check = checkAttributes(data)

    if(!check) {
        res.json({
            status: 'fail',
            reason: 'incomplete post'
        })
    }
    let db = await connect()
    let result = await db.collection('employees').replaceOne({_id: mongo.ObjectId(id)}, data)
    if(result && result.modifiedCount == 1) {
        let returnData = result.ops[0]
        returnData._id = id
        res.json(returnData)
    }
    else {
        res.json({
            status: 'fail'
        })
    }
})




// dohvat jednog dokumenta
app.get('/AdminDashboard/:id', async (req, res) => {
    let id = req.params.id
    let db = await connect()

    let doc = await db.collection("employees").findOne({_id: mongo.ObjectId(id)})
    res.json(doc)
    console.log(doc)
})



//code
app.get("/tajna", [auth.verify], (req, res) => {
   res.json({ message: "Ovo je tajna : " + req.jwt.signupEmail + req.jwt.signupType})
})

//LOGIN
app.post("/Login", async (req, res) => {
    let user = req.body
    try {
        let result = await auth.authenticateUser(user.signupEmail, user.signupPassword)
        res.json(result)
    }
    catch(e) {
        res.status(403).json({ error: e.message})
    }
    res.json(user)
})


//REGISTRACIJA
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
app.get('/EmployeeCards', [auth.verify],  async (req, res) => {
    let db = await connect()
    let query = req.query
    let selection = {}
    if (query._any) {
        let search = query._any
        let terms = search.split(" ")
        let atributes = ["signupName", "signupSurname", "signupEnterprise",
         "signupAddress", "signupCity", "signupPosition", "signupType"]
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
    console.log(results)
    res.json(results)
})

//ADMINDASHBOARD I SEARCH U NJEMU
app.get('/AdminDashboard', [auth.verify], [auth.admin], async (req, res) => {
    let db = await connect()
    let query = req.query

    let selection = {}

    if (query._any) {
        let search = query._any
        let terms = search.split(" ")
        let atributes = ["signupName", "signupSurname", "signupEnterprise",
         "signupAddress", "signupCity", "signupPosition", "signupType"]

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
})  */


app.listen(port, () => console.log(`Slušam na portu ${port}!`))

