import { json } from "@sveltejs/kit";

export const GET = async ({ platform }) => {
    const dataFromDB = await platform.env.testing.prepare("SELECT * FROM blog").all();
    if(!dataFromDB) {
        return json({ status: false });
    }
    return json({ status: true, data: dataFromDB});
}

// export async function GET({ platform }) {
//     const query = `SELECT * FROM blog;`;
    
//     try {
//       const result = await platform.env.testing.prepare(query).all();
//       return new Response(JSON.stringify(result), { status: 200 });
//     } catch (error) {
//       console.error('Error fetching all blog entries:', error);
//       return new Response('Error fetching data: ' + error, { status: 500 });
//     }
//   }