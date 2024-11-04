export default {
	async fetch(request, env) {
		const { results } = await env.DB.prepare('SELECT * FROM blogs').all();
		return new Response(JSON.stringify(results), {
			headers: { 'content-type': 'application/json' }
		});
	}
};
