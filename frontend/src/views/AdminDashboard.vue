<template>
  <div class="AdminDashboard">
     <AdminDashboardComponent :key="card.id" :info="card" v-for="card in cards"/>
    </div>
</template>

<script>


// @ is an alias to /src
import AdminDashboardComponent from '@/components/AdminDashboardComponent.vue'
import _ from 'lodash'
import store from '@/store.js'
import { EmployeeCards, Service } from '@/services/index.js'

export default {
  data () {
    return{ store,
    cards: [],
    term: ''}
  },
  name: 'AdminDashboard',

  watch: {
    "store.searchTerm": _.debounce(function()  {
      this.fetchCards()
    }, 600)
  },

  methods: {
  async  fetchCards(term) {
     term = term || store.searchTerm
     this.cards = await EmployeeCards.getAllCards(term)
    }
  },

 mounted() {
   this.fetchCards()
  },

  components: {
    AdminDashboardComponent,
   
  }
}
</script>
