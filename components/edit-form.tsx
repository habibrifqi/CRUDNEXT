 "use client"
import { saveContact } from "@/lib/actions"
import { useFormState } from "react-dom"
import { SubmitButton } from "@/components/buttons"
import { updateContact } from "@/lib/actions"
import type { Contact } from "@prisma/client"

const UpdateForm = ({contact}:{contact:Contact}) => {
    const UpdateContactWithId = updateContact.bind(null,contact?.id) 
    const [state, formAction] = useFormState(UpdateContactWithId,null);

  return (
    <div>
        <form action={formAction}>
            <div className='mb-5'>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">Fullname</label>
                <input type="text" id='name' name='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='fullname' 
                defaultValue={contact?.name}
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500">{state?.Error?.name}</p>
                </div>
            </div>

            <div className='mb-5'>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                <input type="text" id='phone' name='phone' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Phone'
                defaultValue={contact?.phone}
                />
                <div id="phone-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500">{state?.Error?.phone}</p>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500">{state?.message}</p>
                </div>
            </div>
            
            <SubmitButton label="update" />
        </form>
    </div>
  )
}

export default UpdateForm 