import { json } from "@sveltejs/kit";
import { deleteQuoteSchema } from "../../../../lib/backend/schemas";

export const DELETE=async({request,platform})=>{
try {
    const data=await request.json();
    const { error, value } = deleteQuoteSchema.validate(data);
    if (error) {
        throw new Error(error.details[0].message);
    }
    await platform.env.DB.prepare(`DELETE FROM quotes where quoteID IN (${ value.ids.join(",") })`).run()
    return json({status:true,data:null})
} catch (error) {
    return json({status:false,message:error.message})
}
}