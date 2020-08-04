<template>
  <div class="createEmployee">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">

          <div class="card">
            <div class="card-header">Create Employee</div>

            <div class="card-body">
              <form class="needs-validation"  @submit.prevent ="submitForm()">
                <div class="form-row">


                  <div class="col-md-4 mb-3">
                    <label for="validationTooltip01">First name</label>
                    <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" v-model="employee.firstName">
                  </div>


                  <div class="col-md-4 mb-3">
                    <label for="validationTooltip02">Last name</label>
                    <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" v-model="employee.lastName">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationTooltipUsername">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                      </div>
                      <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" v-model="employee.userName">
                    </div>
                  </div>
                </div>


                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label for="validationTooltip03">State</label>
                    <input type="text" class="form-control" id="validationTooltip03" placeholder="State" v-model="employee.state">
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="validationTooltip04">Telephone No</label>
                    <input type="text" class="form-control" id="validationTooltip04" placeholder="Telephone No" v-model="employee.teleNo">
                  </div>
                </div>
                <button class="btn btn-outline-success" type="submit" >Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'createEmployee',
  data(){
    return{
      employee:{
        firstName:'',
        lastName:'',
        userName:'',
        state:'',
        teleNo:''
      }
    }
  },

  validations:{
    firstName: {
      required,
      minLength: minLength(4)
    },
    lastName: {
      required,
      minLength: minLength(4)
    }
  },
  methods:{
    submitForm(){
     this.$http.post("http://127.0.0.1:8000/api/create",this.employee)
             .then(function (response) {
                  console.log(response)
                  this.$router.push('/')
     })
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
