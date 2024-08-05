import { getContacts } from "@/lib/data"
import {convertToIndonesiaFormat} from "@/lib/formatdate"
import { EditButton,DeleteButton } from "@/components/buttons";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const ContactTable = async () => {
    const contacts = await getContacts();
  return (
    <table className=''>
        <TableCaption>CURD AJA</TableCaption>
        <TableHeader className=''>
            <TableRow>
                <TableHead  className=''>#</TableHead >
                <TableHead  className=''>Name</TableHead >
                <TableHead  className=''>Phone Number</TableHead >
                <TableHead  className=''>Created At</TableHead >
                <TableHead  className=' text-center'>Actions</TableHead >
            </TableRow>
        </TableHeader>
        <TableBody>

            {contacts.map((contact, index) => (
            <TableRow key={contact.id} className="bg-white border-b">
                <TableCell  className='py-3 px-6'>{index + 1}</TableCell>
                <TableCell  className='py-3 px-6'>{contact.name}</TableCell >
                <TableCell  className='py-3 px-6'>{contact.phone}</TableCell >
                <TableCell  className='py-3 px-6'>{convertToIndonesiaFormat(contact.createdAt.toString())}</TableCell >
                <TableCell  className="py-3 px-6 text-center flex justify-center gap-2">
                    <EditButton id={contact.id}/>
                    <DeleteButton id={contact.id}/>
                </TableCell >
            </TableRow>
            ))}
        </TableBody>
    </table>
  )
}

export default ContactTable