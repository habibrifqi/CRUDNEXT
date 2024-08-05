import {prisma} from "@/lib/prisma"

export const getContacts = async (query:string, currentPage:number) =>{
    try {
        const constacts = await prisma.contact.findMany({
            where :{
                OR : [
                    {
                        name:{
                            contains :query,
                            mode : "insensitive"
                        }
                    },
                    {
                        phone:{
                            contains :query,
                            mode : "insensitive"
                        }
                    }
                ]
            }
        });
        return constacts
    } catch (error) {
        throw new Error('gagal fecth data');
    }
}

export const getContactById = async (id:string) =>{
    try {
        const constact = await prisma.contact.findUnique({
            where :{id}
        });
        return constact
    } catch (error) {
        throw new Error('gagal fecth data');
    }
}