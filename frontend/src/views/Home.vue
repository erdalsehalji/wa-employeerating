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
EMPLOYEE - can rate and comment other employees and send feedback to admin if his data is incorrect">Click
          me</button></div>
    </div>
    <div class="container"><br>
      <h1>PLEASE SELECT LOGIN OR SIGN UP (admins only) </h1><br>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" data-placement="top"
            title="Form restriction" data-content="Login is used by employees so they can use application.">YOU SHOULD
            CLICK
            THIS</button><br><br><button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal"
            data-target="#exampleModal">LOGIN </button>

          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Login form</h5><button type="button" class="close"
                    data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;
                    </span></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email"
                        class="form-control" v-model="loginEmail" id="loginEmail" aria-describedby="emailHelp"><small
                        id="emailHelp" class="form-text text-muted">We'll never
                        share your email with anyone
                        else.</small></div>
                    <div class="form-group"><label for="exampleInputPassword1">Password</label><input type="password"
                        class="form-control" v-model="loginPassword" id="loginPassword"></div>
                    <div class="form-group form-check"><input type="checkbox" class="form-check-input"
                        id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div><button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                    data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Log me
                    in</button></div>
              </div>
            </div>
          </div><br><br><button type="button" class="btn btn-success btn-block" data-container="body"
            data-toggle="popover" data-placement="top" data-content="Admin accounts are predefined. Employees are added by admin at home -> signup. 
Admin dashboard is used only by admins.">
            Mechanics </button><br><br><button type="button" class="btn btn-success btn-block" data-container="body"
            data-toggle="popover" data-placement="top" data-content="Admin only feature that enables adding new employee. Located at 
home ->signup.">
            Add </button><br><br><button type="button" class="btn btn-success btn-block" data-container="body"
            data-toggle="popover" data-placement="top" data-content="Admin only feature that enables editing employees 
atributes.">
            Edit </button><br><br><button type="button" class="btn btn-success btn-block" data-container="body"
            data-toggle="popover" data-placement="top" data-content="Admin only feature than enables deleting employee. Located in 
admin dashboard.">
            Remove </button><br><br><button type="button" class="btn btn-success btn-block " data-container="body"
            data-toggle="popover" data-placement="top" data-content="Commenting is enabled for employees. Employee can comment 
other employee and also can write comment to admin if his data is not valid in any way.">
            Comment </button><br><br><button type="button" class="btn btn-success btn-block" data-container="body"
            data-toggle="popover" data-placement="top" data-content="Rate feature is core functionality of app. Rating proces is 
very simple,
just select number of stars you want to add to employee.">
            Easy rate </button>
        </div>
        <div class="col"><button type="button" class="btn btn-lg btn-danger" data-toggle="popover" data-placement="top"
            title="Form restriction" data-content="Only admin can use this form!">YOU SHOULD CLICK THIS</button>
          <form><br>
            <div class="form-row">
              <div class="form-group col-md-6"><label for="inputEmail4">Name</label><input type="string"
                  class="form-control" v-model="signupName" id="signupName"></div>
              <div class="form-group col-md-6"><label for="inputPassword4">Surname</label><input type="string"
                  class="form-control" v-model="signupSurname" id="signupSurname"></div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6"><label for="inputEmail4">Enterprise or workplace </label><input
                  type="string" class="form-control" v-model="signupEnterprise" id="signupEnterprise"></div>
              <div class="form-group col-md-6"><label for="inputState">Position</label><select v-model="signupPosition"
                  id="signupPosition" class="form-control">
                  <option selected></option>
                  <option>Senior executive</option>
                  <option>Executive </option>
                  <option>Executive managment</option>
                  <option>Senior director</option>
                  <option>Director</option>
                  <option>Senior manager</option>
                  <option>Manager</option>
                  <option>Senior advisor</option>
                  <option>Advisor</option>
                  <option>Senior (staff)</option>
                  <option>Intermediate (staff)</option>
                  <option>Associate (staff)</option>
                  <option>Other</option>
                </select></div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6"><label for="inputEmail4">Age</label><input type="number"
                  class="form-control" v-model="signupAge" id="signupAge"></div>
              <div class="form-group col-md-6"><label for="inputState">Sex</label><select v-model="signupSex"
                  id="signupSex" class="form-control">
                  <option selected></option>
                  <option>Male</option>
                  <option>Female</option>
                </select></div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6"><label for="inputEmail4">Email</label><input type="email"
                  class="form-control" v-model="signupEmail" id="signupEmail"></div>
              <div class="form-group col-md-6"><label for="inputPassword4">Password</label><input type="password"
                  class="form-control" v-model="signupPassword" id="signupPassword"></div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6"><label for="inputEmail4">Address</label><input type="email"
                  class="form-control" v-model="signupAddress" id="signupAddress"></div>
              <div class="form-group col-md-6"><label for="inputPassword4">City</label><input type="string"
                  class="form-control" v-model="signupCity" id="signupCity"></div>
            </div>
            <form>
              <div class="form-group">
                <label for="exampleFormControlFile1">Profile pic (optional/must be 125px*125px)</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1">
              </div>
            </form>
            <div class="form-group">
              <div class="form-check"><input class="form-check-input" type="checkbox" id="gridCheck"><label
                  class="form-check-label" for="gridCheck">Check me out </label></div>
            </div><button type="submit" class="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div><br><br>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    data() {
      return {
        _id: '',
        loginEmail: '',
        loginPassword: '',
        signupName: '',
        signupSurname: '',
        signupEnterprise: '',
        signupPosition: '',
        signupAge: '',
        signupSex: '',
        signupEmail: '',
        signupPassword: '',
        signupAddress: '',
        signupCity: '',
        signupImage: ''
      }
    }

    ,
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
</style>