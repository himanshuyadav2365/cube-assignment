import React from 'react'

type TextType={
    content:string
}

const Text = ({content}:TextType) => {
  return (
      <div className='text-gray-700 break-words'>
      <p className='text-sm md:text-lg '>{content}</p>
    </div>
  )
}

export default Text