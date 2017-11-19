import Vue from 'vue'
import Router from 'vue-router'
import Today from 'components/Today'
import CollectionBox from 'components/CollectionBox'
import Calendar from 'components/Calendar'
import AddListItem from 'components/AddListItem'
import ManageListItem from 'components/ManageListItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/today'
    },
    {
      path: '/today',
      component: Today
    },
    {
      path: '/collectionbox',
      component: CollectionBox
    },
    {
      path: '/calendar',
      component: Calendar
    },
    {
      path: '/addlistitem',
      component: AddListItem
    },
    {
      path: '/managelistitem',
      component: ManageListItem
    }
  ]
})
