import Link from 'next/link'
import React from 'react'

const Home = async () => {



    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await users.json()
    console.log(response);

   



    return (
        <>
            <h1 className='text-2xl text-center'>Users</h1>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full ms-10">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {response.map((item) => {
                        return <tbody key={item.id}>
                            <tr>
                                <th>{item.id}</th>
                                <td>{item.username}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                <Link href={`/Home/${item.id}`}><button className="btn btn-neutral">See all details</button></Link>
                                </td>

                            </tr>

                        </tbody>




                    })}




                </table>
            </div>




            {response.map(item => {
                return <div key={item.id}>


                </div>

            })}
        </>
    )
}

export default Home