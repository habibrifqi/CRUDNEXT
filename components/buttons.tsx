"use client"
import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import { useFormStatus  } from "react-dom";
import clsx from "clsx";
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { deleteContanct } from "@/lib/actions";


export const CreateButton = () => {
    return (
        <Link href={"/contacts/create"}>
        <Button variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white hover:text-white">
            <IoAddSharp size={20} />
            Create
        </Button>
        </Link>
    );
}

export const EditButton = ({id}:{id:string}) => {
    return (
        <Link
        href={`/contacts/edit/${id}`}
            className={buttonVariants({ variant: "secondary" })}
            type="button"
        >
            <IoPencil size={20}/>
        </Link>
    );
}

export const DeleteButton = ({id}:{id:string}) => {
    const DeleteContanctWintId = deleteContanct.bind(null,id) 
    return (
        <form action={DeleteContanctWintId}>
        <button
        className={buttonVariants({ variant: "default" })}
        >
            <IoTrashOutline size={20}/>
        </button>
        </form>
    );
}

export const SubmitButton = ({label} :{label:string}) => {
    const {pending} = useFormStatus();

    const className = clsx("text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center",{
        "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" : pending,
    })
    return (
        <button type='submit' className={className} disabled={pending}

        >
            {
                label === "save" ? 
                (
                    <span>{pending? "save..." : "save"}</span>
                ):(
                    <span>{pending? "update..." : "update"}</span>
                )
            }

        </button>
    );
}

