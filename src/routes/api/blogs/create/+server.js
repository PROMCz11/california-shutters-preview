import { json } from "@sveltejs/kit";
import { blogSchema } from "../../../../lib/backend/schemas";

export const POST=async({request,platform})=>{
try {
    const data=await request.json();
    const { error, value } = blogSchema.validate(data);
    if (error) {
        throw new Error(error.details[0].message);
    }
    console.log(JSON.stringify(value))
    await platform.env.DB.prepare(`INSERT INTO blogs(text) VALUES ( ? )`).bind(JSON.stringify(value)).run()
    return json({status:true,data:null})
} catch (error) {
    return json({status:false,message:error.message})
}
}