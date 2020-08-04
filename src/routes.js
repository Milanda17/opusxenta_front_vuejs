import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";

Vue.use(VueRouter)


const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/",component:EmployeeList},
        {path:"/create",component:CreateEmployee},
        {path:"/update/:id",component:UpdateEmployee}
    ]
});

export default router
