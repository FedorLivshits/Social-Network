import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://dummyapi.io/data/api/',
	headers: { 'app-id': '60e7083966d25e65157f1997' },
})

export const fetchPosts = (page: number) => {
	return instance
		.get(`post?page=${page}`)
		.then(res => res.data)
		.catch(error => console.log('something went wrong: ' + error))
}
