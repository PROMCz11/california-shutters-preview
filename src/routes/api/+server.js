// import { json } from "@sveltejs/kit";

// export const GET = async () => {
//     const dataFromDB = await platform.env.DB.prepare("SELECT * FROM blog");
//     if(!dataFromDB) {
//         return json({ status: false });
//     }
//     return json({ status: true, data: dataFromDB});
// }

export async function GET({ platform }) {
    const query = `SELECT * FROM blog;`;
    
    try {
      const result = await platform.env.DB.prepare(query).all();
      return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
      console.error('Error fetching all blog entries:', error);
      return new Response('Error fetching data', { status: 500 });
    }
  }  