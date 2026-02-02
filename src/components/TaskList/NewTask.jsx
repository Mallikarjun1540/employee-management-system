import React from 'react'

const NewTask = ({data}) => {
  return (
    <div>
      <div className=" shrink-0 p-5 bg-blue-400 h-full w-105 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 text-sm py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
          {data.title}
        </h2>
        <p className="text-sm mt-2">
          {data.description}
        </p>
        <div className='flex justify-between mt-4'> 
            <button className='bg-green-500 py-1 px-2 text-sm'>Accept Task</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
