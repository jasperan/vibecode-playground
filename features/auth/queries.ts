// Server-internal user/account lookups for auth callbacks.
// Deliberately NOT a "use server" module: server actions are publicly invocable
// endpoints, and these return OAuth tokens and unauthenticated lookups.
import { db } from "@/lib/db";

export const getUserById = async (id:string)=>{
    try {
        const user = await db.user.findUnique({
            where:{id},
            include:{accounts:true}
        })
        return user
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getAccountByUserId = async (userId:string)=>{
    try {
        const account = await db.account.findFirst({
            where:{
                userId
            }
        })
        return account
    } catch (error) {
        console.log(error)
        return null
    }
}
