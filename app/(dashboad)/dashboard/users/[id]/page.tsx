import Link from 'next/link'
import React from 'react'

export default async function Page({ 
  params,
 } : { 
  params: Promise<{ id: string }>  
}) {
  const {id} = await params;

  return (
    <div>
      <h1 className="text-3xl">User Profile : {id}</h1>  

      <div className="mt-10">
        <Link href="/dashboard/users">Back to Users</Link>
      </div>
    </div>
  )
}