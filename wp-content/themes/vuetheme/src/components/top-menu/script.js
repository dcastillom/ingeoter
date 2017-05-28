export default {

	props: ['titles', 'display'],

	methods: {
		sendDisplay(title) {
			this.$emit('display', title)
		}
	}
}