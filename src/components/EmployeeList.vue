<template>
  <div class="employeeList">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Telephone Number</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="employee in employees" :key="employee.message">
              <th scope="row">{{employee.id}}</th>
              <td>{{employee.firstName}}</td>
              <td>{{employee.lastName}}</td>
              <td>{{employee.teleNo}}</td>
              <td><router-link :to="'/update/'+employee.id"><button type="button" class="btn btn-outline-primary btn-sm">Update</button></router-link>
                &nbsp;
             <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteEmployee($event)" v-bind:id="employee.id">Delete</button></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeList',
  data(){
    return{
      employees:[]
    }
  },

  created() {
    this.$http.get("http://127.0.0.1:8000/api/all").then(function (response) {
      this.employees = response.body.message;
    })
  },

  methods:{
    deleteEmployee(event){
      this.$http.delete("http://127.0.0.1:8000/api/delete/"+event.target.id).then(function (response){
        console.log(response)

        var position = this.employees.findIndex(function (element) {
          return element.id == event.target.id;

        })
        this.employees.splice(position,1)

      })
    },

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
