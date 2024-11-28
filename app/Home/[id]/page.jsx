import React from 'react'

const SingleUser = async ({params}) => {

    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await user.json();
    console.log(data);
    




  return (
    <>
    <div className="card lg:card-side bg-base-100 shadow-xl w-2/4 ms-60 mt-10">
  
  <div className="card-body">
    <h4 className="text-2xl text-center pb-10">User details</h4>
    
    
    <h4 className="text-2xl">Name: {data.name}</h4>
    <p> <span className='font-semibold'>User name:</span> {data.username}.</p>
    <p> <span className='font-semibold'>Email:</span> {data.email}.</p>
    <p> <span className='font-semibold'>Phone:</span> {data.phone}.</p>
    </div>
    <div className="card-actions justify-end">
      
    
  </div>
</div>
    </>
  )
}

export default SingleUser