import { mapGetters } from 'vuex'

export default {

  computed: mapGetters({
    activeContent: 'getActiveContent'
  }),
  components: {
  	Header: require('./components/header/index.vue'), 
    Company: require('./components/company/index.vue'),
  	Footer: require('./components/footer/index.vue'),
    RightMenu: require('./components/right-menu/index.vue')
  }

}