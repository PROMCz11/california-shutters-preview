export default {
	async fetch(request, env) {
		const { results } = await env.DB.prepare('SELECT * FROM blogs').all();
		await env.DB.prepare(`INSERT INTO blogs(text) VALUES ("${await request.json().name}")`).run();
		return new Response(JSON.stringify(results), {
			headers: { 'content-type': 'application/json' }
		});
	}
};
