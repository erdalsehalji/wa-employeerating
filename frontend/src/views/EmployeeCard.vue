<template>
  <div class="EmployeeCard">
    <div class="clicker" :key="card.id" :info="card" v-for="card in cards">
     <EmployeeCardComponent :info="card" />
    </div>
    </div>
</template>

<script>

// @ is an alias to /src
import EmployeeCardComponent from '@/components/EmployeeCardComponent.vue'
import _ from 'lodash'
import store from '@/store.js'
import { EmployeeCards, Service } from '@/services/index.js'

export default {
  data () {
    return {
    store,
    cards: [],
    term: ''
    }
  },
  name: 'EmployeeCard',

  watch: {
    "store.searchTerm": _.debounce(function()  {
      this.fetchCards()
    }, 600)
  },

  methods: {
  async  fetchCards(term) {
     term = term || store.searchTerm
     this.cards = await EmployeeCards.getAllCards(term)
     console.log(this.cards)
    },

  },
  
 mounted() {
   this.fetchCards()
  
  },

  components: {
    EmployeeCardComponent,
   
  }
}
</script>

