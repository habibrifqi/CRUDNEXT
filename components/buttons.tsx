import Link from "next/link";
import { IoAddSharp } from "react-icons/io5";
export const CreateButton = () => {
    return (
        <Link
        href={"/contacts/create"}
            className=" inline-flex bg-blue-500 hover:bg-blue-700 items-center text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            type="button"
        >
            <IoAddSharp size={20}/>
            Create
        </Link>
    );
}