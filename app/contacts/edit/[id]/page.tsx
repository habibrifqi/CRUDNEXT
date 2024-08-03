import UpdateForm from '@/components/edit-form'
import React from 'react'
import { getContactById } from '@/lib/data'
import { notFound } from 'next/navigation'

const Edit = async ({params:{id}}:{params:{id:string}}) => {
    const contact = await getContactById(id);
    if (!contact) {
        notFound()
        
    }
    return (
        <div className='max-w-md mx-auto mt-5'>
            <h1 className='text-2xl text-center mb-2'>Add newContact</h1>
            <UpdateForm contact={contact} />
        </div>
      )
}

export default Edit