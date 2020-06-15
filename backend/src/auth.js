import mongo from 'mongodb'
import connect from './db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


(async () => {
  let db = await connect()
  await db.collection("employees").createIndex({signupEmail: 1}, {unique: true})
})()



export default {
  async  registerUser(userData) {
        console.log("dodao :" ,userData)
        let db = await connect()
        let doc = {
          signupName: userData.signupName,
          signupSurname: userData.signupSurname,
          sigunpPassword: await bcrypt.hash(userData.signupPassword, 8),
          signupEnterprise: userData.signupEnterprise,
          signupPosition: userData.signupPosition,
          signupAge: userData.signupAge,
          signupSex: userData.signupSex,
          signupEmail: userData.signupEmail,
          signupAddress: userData.signupAddress,
          signupCity: userData.signupCity,
          signupType: userData.signupType,
          signupImage: userData.signupImage
        }

        try {
           let result = await db.collection("employees").insertOne(doc)
           if (result && result.insertedId)
           return result.insertedId
        }
        catch (e) {
            if (e.name == 'MongoError' && e.code == 11000) {
            throw new Error("Email already exists")
          }
        }
        await db.collection("employees").insertOne(doc)
    },

}
