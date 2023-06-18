import {useEffect, useState} from 'react'

function Users() {
    
    const[users,setUsers]=useState([])

    useEffect(()=>{
        fetch("https://reqres.in/api/users?page=2")
        .then(res=>res.json())
        .then(apidata=>setUsers(apidata.data))
        .catch(err=>console.log(err))
    },[])

  return (
    <div className='text-center container'>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>LastName</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((userObj)=><tr key={userObj.id}>
                        <td>{userObj.id}</td>
                        <td>{userObj.email}</td>
                        <td>{userObj.first_name}</td>
                        <td>{userObj.last_name}</td>
                        <td><img src={userObj.avatar} alt="" /></td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default Users
