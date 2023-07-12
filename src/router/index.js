import Vue from 'vue'
import Router from 'vue-router'
import ExcerciseOverview from '@/components/ExcerciseOverview'
import ExcercisePage from '@/components/ExercisePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExcerciseOverview',
      component: ExcerciseOverview
    },
    {
      path: '/excercise/:id',
      name: 'ExcercisePage',
      component: ExcercisePage
    }
  ]
})
