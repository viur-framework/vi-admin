import view_missing from "../views/view_missing.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import {useUserStore} from "../stores/user";

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'view_missing',
    component: view_missing
  },
  {
    path: '/',
    name: 'home',
    component: () => import("../views/home.vue")
  },
  {
    path: '/db/:module/list/:group?',
    name: 'list',
    props: true,
    component: () => import("../views/list.vue")
  },
  {
    path: '/db/:module/tree',
    name: 'tree',
    props: true,
    component: () => import("../views/tree.vue")
  },
  {
    path: '/db/:module/tree.node',
    name: 'hierarchy',
    props: true,
    component: () => import("../views/hierarchy.vue")
  },
  {
    path: '/db/:module',
    name: 'singleton',
    props: true,
    component: () => import("../views/singleton.vue")
  },
  {
    path: '/db/:module/edit/:group?/:skelkey',
    name: 'edit',
    meta: {"action": "edit"},
    props: true,
    component: () => import("../views/edit.vue")
  },
  {
    path: '/db/:module/add/:group?',
    name: 'add',
    meta: {"action": "add"},
    props: true,
    component: () => import("../views/edit.vue")
  },
  {
    path: '/db/:module/add/:skeltype/:skelkey',
    name: 'addnode',
    meta: {"action": "add"},
    props: true,
    component: () => import("../views/edit.vue")
  },
  {
    path: '/db/:module/edit/:skeltype/:skelkey',
    name: 'editnode',
    meta: {"action": "edit"},
    props: true,
    component: () => import("../views/edit.vue")
  },
  {
    path: '/db/:module/clone/:group?/:skelkey',
    name: 'clone',
    meta: {"action": "clone"},
    props: true,
    component: () => import("../views/edit.vue")
  },
    {
    path: '/db/:module/fluidpage/:parentmodule/:key?',
    name: 'fluidpage',
    props: true,
    component: () => import("../views/fluidpage.vue")
  }


]


const router = createRouter({
  // @ts-ignore
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})
router.afterEach((to, from) => {
  useUserStore().addAction();
})
export default router
