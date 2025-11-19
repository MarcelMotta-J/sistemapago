
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/loadEstudiantes"
  },
  {
    "renderMode": 2,
    "route": "/loadPagos"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/estudiantes"
  },
  {
    "renderMode": 2,
    "route": "/pagos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24755, hash: '37ae3b2dc9609440c143478d9d1c77e5c80251e7ae959fd8e35d25aeffdc73d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17070, hash: '0d087102c872e66fa9cb6b118b69ab1a199109702d83fbf0c7f771de2548b3bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 25171, hash: 'b978ec9f3d44c3b5c3076ea94370f2e582e2f4d1a27cbcde22ec70be95463f92', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 30619, hash: '829b914b8622f8bb65b10b8bbf83974bc77b96196ce36d18f119ccc71b853f85', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'pagos/index.html': {size: 30603, hash: '469651510db3c2d1b3ea74b76e79aa934cb0f1a0aabfa8cdbaaa5d6444ecb2bd', text: () => import('./assets-chunks/pagos_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 25180, hash: 'df4ff328328c13790593200f3cf5e6af96de745d2d7e42099e2060a34a996c32', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'loadPagos/index.html': {size: 25189, hash: '29f7006f352b5d98d76e0ebe117bf43290caf3a6eeb15644b77370c960badd10', text: () => import('./assets-chunks/loadPagos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 94081, hash: '3433caf7ab1289c30e22ebbf42db854df00e37276d092e3205e2f24554ea4f28', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 30603, hash: '469651510db3c2d1b3ea74b76e79aa934cb0f1a0aabfa8cdbaaa5d6444ecb2bd', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'estudiantes/index.html': {size: 30627, hash: 'cabb7d5b5e979f854ea653bf7f6d9429b2aa343f38084f691d7f2a896e44221f', text: () => import('./assets-chunks/estudiantes_index_html.mjs').then(m => m.default)},
    'loadEstudiantes/index.html': {size: 25207, hash: '00ef63183724f59e2c468cc855e8fd54cae4ee6c2fc6497ea4aef36633aee3ba', text: () => import('./assets-chunks/loadEstudiantes_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 94081, hash: '3433caf7ab1289c30e22ebbf42db854df00e37276d092e3205e2f24554ea4f28', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-WA2SRWIY.css': {size: 8264, hash: '54dR+RzHwu4', text: () => import('./assets-chunks/styles-WA2SRWIY_css.mjs').then(m => m.default)}
  },
};
