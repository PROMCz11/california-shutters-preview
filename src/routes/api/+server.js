import { json } from "@sveltejs/kit";

export const GET = async ({ platform }) => {
  const results = await platform.env.DB.prepare("SELECT * FROM blogs").all();
  return json({ data: results });
}