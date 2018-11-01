'use strict';
const MAX_POSTS_COUNT = 3;
module.exports = {
	name: 'posts',

	settings: {},
	dependencies: [],


	actions: {
		userPosts: {
			params: {
				userId: 'number'
			},
			handler (ctx) {
				const userId = ctx.params.userId;
				const numberOfPosts = Math.floor(Math.random() * MAX_POSTS_COUNT);
				const posts = [...new Array(numberOfPosts).keys()];
				return posts.map((id) => ({id, userId, content: `post ${id} for user ${userId}`}))
			}
		}
	},


	events: {},


	methods: {},

	created () {

	},


	started () {

	},

	stopped () {

	}
};
