import Vue from 'vue'
import VueRouter from 'vue-router'

import Company from './pages/company/index.vue'
import Services from './pages/services/index.vue'
import Blog from './pages/blog/index.vue'
import Contact from './pages/contact/index.vue'

Vue.use(VueRouter)

var router = new VueRouter({
	mode: 'history',
  	routes: [
		{ path: '/inicio'},
		//{ path: '/ingeoter', redirect: '/inicio' },
		{ path: '/empresa', component: Company},
		{ path: '/empresa/:id', component: Company, props: true},
		{ path: '/servicios', component: Services },
		{ path: '/blog', component: Blog },
		{ path: '/contacto', component: Contact },

		{ path: '/ingeoter/empresa/presentacion/', redirect: '/empresa/presentacion' },
		{ path: '/ingeoter/presentacion/', redirect: '/empresa/presentacion' },

		{ path: '/ingeoter/empresa/equipo-tecnico/', redirect: '/empresa/equipo-tecnico' },
		{ path: '/ingeoter/equipo-tecnico/', redirect: '/empresa/equipo-tecnico' } 
	],
})



export default router