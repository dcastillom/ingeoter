import base from '../../services/base'

export default {

    data() {
        return {
			description: '',
			contact: ''
        }
    },

	methods: {
		getGeneral() {
			base.get('general')
				.then(data => {
					this.description = data.description
				})
		},
		getContact() {
			base.get('sections', { slug: 'contacto' })
				.then(data => {
					this.contact = data[0].content.rendered
				})
		}
	},

	mounted() {
		this.getGeneral(),
		this.getContact()
	}
}