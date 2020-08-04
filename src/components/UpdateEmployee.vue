<template>
  <div class="updateEmployee">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="card-header">Update Employee</div>
            <div class="card-body">
              <form class="needs-validation"  @submit.prevent ="UpdateForm()">
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="validationTooltip01">First name</label>
                    <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" v-model="employee.firstName">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationTooltip02">Last name</label>
                    <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name"  v-model="employee.lastName">

                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationTooltipUsername">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                      </div>
                      <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" v-model="employee.userName">

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
                <button class="btn btn-outline-primary" type="submit">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'updateEmployee',
  data() {
    return {
      employee:{
        firstName:'',
        lastName:'',
        userName:'',
        state:'',
        teleNo:''
      }
    }
  },

  created() {

      this.$http.get("http://127.0.0.1:8000/api/update/"+this.$route.params.id).then(function (response) {
        console.log(response)
        this.employee = response.body.message;
      })
},

  methods:{

    UpdateForm(){

      this.$http.post("http://127.0.0.1:8000/api/update/"+this.$route.params.id,this.employee).then(function (response) {
        console.log(response)
        this.$router.push('/')
      })

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
