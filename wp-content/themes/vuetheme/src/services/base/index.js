import * as request from 'superagent'

class BaseService {

	constructor() {
		this.urls = require('../urls.json')
	}

	get(id, params = null) {

		let url = this.urls[id]

		if (params) {
			for( const key of Object.keys(params) ) {
				url += `${key}=${params[key]}`
			}
		}

		const req = request.get(url)

		return req
			.then(data => data.body)
			.catch(error => console.log('error ', error))
	}
	
}

export default new BaseService