// export async function GET({ platform }) {   
//     const { results } = await platform.env.DB.prepare("SELECT * FROM blogs").all();
//     return new Response(JSON.stringify(results), {
//       headers: { "content-type": "application/json" }
//     });
//   }
  

import { json } from "@sveltejs/kit";

export const GET = async ({ platform }) => {
  const results = await platform.env.DB.prepare("SELECT * FROM blogs").all();
  return json({ data: results });
}