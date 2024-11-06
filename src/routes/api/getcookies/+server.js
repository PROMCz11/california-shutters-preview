import { json } from "@sveltejs/kit";

export const GET=async({cookies})=>{
    return json({cookies: cookies.get("name")}) 
}