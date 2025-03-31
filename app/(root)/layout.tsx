import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <h1 className='text-3xl'>NAVBAR</h1>
      {children}
      <h1 className='text-3xl'>FOOTER</h1>
    </div>
  )
}

export default layout
