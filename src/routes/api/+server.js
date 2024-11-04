import { json } from "@sveltejs/kit";

export const GET = async ({ platform }) => {
  const results = await platform.env.DB.prepare("SELECT * FROM blogs").all();
  return json({ data: results });
}

export const POST = async ({ platform, request }) => {
  const requestData = await request.json();
  const name = requestData.name;
  // const query = `INSERT INTO blog (title, blocks) VALUES (?, ?)`;
  // const result = await platform.env.DB.prepare(query).bind(title, blocks).run();
  await platform.env.DB.prepare(`INSERT INTO blogs(text) VALUES ("${name}")`).run();
  console.log("server working");
  const results = await platform.env.DB.prepare("SELECT * FROM blogs").all();
  return json({ data: results });
}