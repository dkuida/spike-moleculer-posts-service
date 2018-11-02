'use strict';
const MAX_POSTS_COUNT = 3;
const MAX_EXECUTION_COUNT = process.env.MAX_EXECUTION_COUNT || 2;
const DIE_AFTER_CALLS = Math.floor(Math.random() * MAX_EXECUTION_COUNT) + 1;
let overallCalls = 0;
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
				this.checkIfShouldKill(ctx);
				const userId = ctx.params.userId;
				const numberOfPosts = Math.floor(Math.random() * MAX_POSTS_COUNT);
				const posts = [...new Array(numberOfPosts).keys()];
				return posts.map((id) => ({id, userId, content: `post ${id} for user ${userId}`}))
			}
		}
	},


	events: {},


	methods: {
		checkIfShouldKill (ctx) {
			overallCalls++;
			if (DIE_AFTER_CALLS > 0 && overallCalls >= DIE_AFTER_CALLS) {
				this.logger.error(`killing service ${this.fullName} worker ${process.pid}`);
				process.exit(-1)
			}
		}
	},

	created () {

	},


	started () {

	},

	stopped () {

	}
};
