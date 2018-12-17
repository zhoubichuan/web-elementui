import Vue from "vue";
import Router from "vue-router";
import Student from "@/components/Student";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Student",
      component: Student
    }
  ]
});
