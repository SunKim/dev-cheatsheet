const routes = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/os',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages/OsIndex.vue') },
      { path: 'ubuntu', component: () => import('pages/os/Ubuntu.vue') },
      { path: 'macos', component: () => import('pages/os/Macos.vue') }
    ]
  },
  {
    path: '/db',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DbIndex.vue') },
      { path: 'mariadb', component: () => import('pages/db/Mariadb.vue') }
    ]
  },
  {
    path: '/front',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FrontIndex.vue') },
      { path: 'html5', component: () => import('pages/front/Html5.vue') },
      { path: 'css3', component: () => import('pages/front/Css3.vue') },
      {
        path: 'javascript',
        component: () => import('pages/front/Javascript.vue')
      },
      { path: 'es6', component: () => import('pages/front/Es6.vue') },
      { path: 'vuejs', component: () => import('pages/front/Vuejs.vue') }
    ]
  },
  {
    path: '/back',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages/BackIndex.vue') },
      { path: 'ci', component: () => import('pages/back/Ci.vue') },
      { path: 'laravel', component: () => import('pages/back/Laravel.vue') },
      { path: 'spring', component: () => import('pages/back/Spring.vue') }
    ]
  },
  {
    path: '/hybrid',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HybridIndex.vue') },
      { path: 'flutter', component: () => import('pages/hybrid/Flutter.vue') },
      {
        path: 'reactnative',
        component: () => import('pages/hybrid/ReactNative.vue')
      },
      { path: 'quasar', component: () => import('pages/hybrid/Quasar.vue') }
    ]
  },
  {
    path: '/tool',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ToolIndex.vue') },
      {
        path: 'chromedev',
        component: () => import('pages/tool/ChromeDev.vue')
      },
      { path: 'git', component: () => import('pages/tool/Git.vue') },
      { path: 'heroku', component: () => import('pages/tool/Heroku.vue') },
      { path: 'etc', component: () => import('pages/tool/Etc.vue') }
    ]
  },
  {
    path: '/cloud',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CloudIndex.vue') },
      { path: 'firebase', component: () => import('pages/cloud/FireBase.vue') }
    ]
  },
  {
    path: '/security',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [{ path: '', component: () => import('pages/SecurityIndex.vue') }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
