export default {
  data() {
    return {
      visible: false
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
    },
    setActiveContent(content) {
      this.visible = false
      this.$store.dispatch('setActiveContent', content)
    }
  },
}
