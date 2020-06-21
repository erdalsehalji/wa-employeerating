<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">EMPLOYEE RATING</h1>
      <p class="lead">Application that enables your employees rate each others work,
        progress and skils.</p>
      <hr class="my-4">
      <p>With its intuitive and simple design Employee Rating is reasonable choice for all personel of enterprise.</p>
      <div class="bs-example"><button type="button" class="btn btn-primary" data-toggle="popover" data-placement="top"
          title="Types of users" data-content="ADMIN - can add, edit or remove employees. Have its own dashboard. 
EMPLOYEE - can add, rate and comment other employees and send feedback to admin if his data is incorrect.">Click
          me</button></div>
    </div>
    <div class="container"><br>
      <h1>PLEASE SELECT LOGIN OR SIGN UP OR GET FAMILIAR WITH FUNCTIONS OF APP </h1><br>
      <div class="row">
        <div class="col">
          <router-link to="/Register" id="signupButton" >SIGN ME UP</router-link><br><br>
          <router-link to="/Login" id="signupButton" >LOGIN ME IN</router-link>
         <br><br><button type="button" class="btn btn-success btn-block" data-container="body"
            data-toggle="popover" data-placement="top"
            data-content="3 types: Guest (view only mode), Employee (view, rate and comment mode), Admin (view, add, edit, remove mode).">
            Types of users </button><br><br>
          <button type="button" class="btn btn-success btn-block" data-container="body" data-toggle="popover"
            data-placement="top" data-content="New employees and admins are added by using signup form. 
Admin dashboard is used only by admins.">
            Mechanics </button><br><br><button type="button" class="btn btn-success btn-block" data-container="body"
            data-toggle="popover" data-placement="top" data-content="Feature that enables adding employees or admins.">
            Add </button><br><br><button type="button" class="btn btn-success btn-block" data-container="body"
            data-toggle="popover" data-placement="top" data-content="Admin only feature that enables editing employee and admin
atributes. Located in admin dashboard.">
            Edit </button><br><br><button type="button" class="btn btn-success btn-block" data-container="body"
            data-toggle="popover" data-placement="top" data-content="Admin only feature than enables deleting employee or admin. Located in 
admin dashboard.">
            Remove </button><br><br><button type="button" class="btn btn-success btn-block " data-container="body"
            data-toggle="popover" data-placement="top" data-content="Commenting is enabled for employees. Employee can comment 
other employee and also can write comment to admin if his data is not valid in any way.">
            Comment </button><br><br><button type="button" class="btn btn-success btn-block" data-container="body"
            data-toggle="popover" data-placement="top" data-content="Rate feature is core functionality of app. Rating proces is 
very simple, just select number of stars you want to add to employee.">
            Easy rate </button>
        </div>

      </div><br><br>
    </div>
  </div>
</template>

<script>
import store from '@/store.js'
  // @ is an alias to /src
  export default {
    data() {
      return store
    },
    name: 'Home',
    components: {}
  }

$('.popover-dismiss').popover({
      trigger: 'hover'
    }
  ),
$(function () {
      $('[data-toggle="popover"]').popover()
    }
),
$('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('hover')
    }
  ) 
</script>

<style scoped>
p {
  color: black
}

h1 {
  color: black;
}

form-group col-md-6 {
  color: black
}

#signupButton {
  font-size: 30px;
}

</style>