export async function GET({ platform }) {   
    const { results } = await platform.env.DB.prepare("SELECT * FROM blogs").all();
    return new Response(JSON.stringify(results), {
      headers: { "content-type": "application/json" }
    });
  }
  