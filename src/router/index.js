import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Fruit from '../components/Fruit'
import Fashion from '../components/Fashion'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/fruit',
            name: 'Fruit',
            component: Fruit
        },
        {
            path: '/fashion',
            name: 'Fashion',
            component: Fashion
        },
    ]
})
