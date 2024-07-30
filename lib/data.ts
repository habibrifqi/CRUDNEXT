import {prisma} from "@/lib/prisma"

export const getContacts = async () =>{
    try {
        const constacts = await prisma.contact.findMany();
        return constacts
    } catch (error) {
        throw new Error('gagal fecth data');
    }
}