import base from '../../services/base'

export default {

    data() {
        return {
			company: '',
			contact: '',
			address: '',
			copyright: ''
        }
    },
    computed: {
    	copy: function() {
    		return `<p>&copy;${ new Date().getFullYear() } ${ this.company }</p> ${ this.copyright }`
    	}
    },

	methods: {
		getGeneral() {
			base.get('general')
				.then(data => {
					this.company = data.name
				})
		},
		getContact() {
			base.get('sections', { slug: 'contacto' })
				.then(data => {
					this.contact = data[0].content.rendered
				})
		},
		getAddress() {
			base.get('sections', { slug: 'direccion' })
				.then(data => {
					this.address = data[0].content.rendered
				})
		},
		getCopy() {
			base.get('sections', { slug: 'copy' })
				.then(data => {
					this.copyright = data[0].content.rendered
				})
		}
	},

	mounted() {
		this.getGeneral(),
		this.getContact(),
		this.getAddress(),
		this.getCopy()
	}
}

