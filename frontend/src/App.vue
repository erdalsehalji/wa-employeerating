<template>
  <div id="app">
    <nav id="mainbar" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <h11>EMPLOYEE RATING</h11>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li>
               <div class="cntr">
	<div class="cntr-innr">
	  <label class="search" for="inpt_search">
			<input id="inpt_search" v-model="searchTerm" type="text" placeholder="Search something" />
		</label>
	</div>
</div>  
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/AdminDashboard">Admin dashboard</router-link>

          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/EmployeeCard">Employee List</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown links
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="nav-link" to="/Feedback">Feedback</router-link>

            </div>
          </li>
        </ul>

      </div>
    </nav>

    <router-view />

  </div>
</template>



<script type="text/javascript">
import store from '@/store.js'

export default {
  data () {
    return store;
  },

 
}
</script>


<style lang="scss">
h11 {
  padding: 5px;
  font-size: 15px;
  letter-spacing: 1px;


}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #217feb;
}

#mainbar {
  background-color: #fbc000;
  margin-bottom: 20px;
}

#navbarNavDropdown {
  background-color: #335f7cc5;
}

#nav {

  a {
    font-weight: bold;
    color: #0adf1c;

    &.router-link-exact-active {
      color: #19466b70;
    }
  }
}

.search {
	display: inline-block;
	position: relative;
	height: 35px;
	width: 35px;
	box-sizing: border-box;
	margin: 1px 8px 7px 3px;
  margin-top: 5px;
	padding: 7px 9px 0px 9px;
	border: 3px solid white;
	border-radius: 25px;
	transition: all 200ms ease;
	cursor: text;
	
	&:after {
		content: "";
		position: absolute;
		width: 3px;
		height: 20px;
		right: -5px;
		top: 21px;
		border-radius: 3px;
		transform: rotate(-45deg);
		transition: all 200ms ease;
	}
	
	&.active,
	&:hover {
		width: 200px;
		margin-right: 0px;
		
		&:after {
			height: 0px;	
		}
	}
	
	input {
		width: 100%;
		border: none;
		box-sizing: border-box;
		font-family: Helvetica;
		font-size: 15px;
		color: inherit;
		background: transparent;
		outline-width: 0px;
	}
#inpt_search {
  text-align: center;
  color: black;
 
}
}


</style>
