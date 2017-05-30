import base from '../../services/base'
import router from '../../router'

export default {

  props: ['id'],

  data() {
    return {
      titles: [],
      options: [],
      path: '/'
    }
  },

  computed: {
    selected() {
      return this.id || this.titles[0][0]
    }
  },

  methods: {
    display(title) {
      router.push(this.path + title)
    },
    getSectionId(route) {
      base.get('sections', { slug: route })
        .then(data => {
          this.getSectionOptions(data[0].id)
        })
    },
    getSectionOptions(sectionId) {
      base.get('sections', { parent: sectionId })
        .then(data => {

          this.options = data
          this.options.forEach(option => {
            this.titles.push([option.slug, option.title.rendered])
          })

          router.push(this.path + this.selected)
        })
    }
  },

  components: {
    TopMenu: require('../../components/top-menu/index.vue')
  },

  mounted() {
    
    var route = this.$route.path.replace('/', '')

    this.$store.dispatch('setActiveContent', route)
    this.path = '/ingeoter/' + route + '/'
    this.getSectionId(route)
  }
}
