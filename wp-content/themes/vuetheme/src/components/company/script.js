import base from '../../services/base'

export default {

  data() {
    return {
      title: null,
      content: null,
      url: '/'
    }
  },

  methods: {
    getCompany() {
      base.get('sections', { slug: 'empresa' })
        .then(data => {
          this.title = data[0].title.rendered
          this.content = data[0].content.rendered
          this.url = '/' + data[0].slug
        })
    }
  },

  components: {
    Button: require('../../components/ui/button/index.vue')
  },

  mounted() {
    this.getCompany()
  }
}
