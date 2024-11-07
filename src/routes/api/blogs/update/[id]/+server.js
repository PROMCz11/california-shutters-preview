import { json } from "@sveltejs/kit";
import { blogSchema } from "../../../../../lib/backend/schemas";

export const PATCH=async({request,params,platform})=>{
    try {
        const data=await request.json();
        const { error, value } = blogSchema.validate(data);
        if (error) {
            throw new Error(error.details[0].message);
        }
        const {id}=params;
        await platform.env.DB.prepare(`UPDATE blogs SET blog = ? WHERE blogID = ${+id}`).bind(JSON.stringify(value)).run()
        return json({status:true,data:null})
    } catch (error) {
        return json({status:false,message:error.message})
    }
}