import axios from 'axios'


//back
let Service = axios.create({
    baseURL: 'http://localhost:3002',
    timeout: 1500
})

//rute
let EmployeeCards = {
   async getAllCards(searchTerm) {
        let res = await Service.get(`/EmployeeCards?_any=${searchTerm}`)
        let data = res.data
        this.cards = data
       // console.log("Backend sa axiosom/mongo : ", data)
        return data
    }
}
  
export { Service, EmployeeCards }