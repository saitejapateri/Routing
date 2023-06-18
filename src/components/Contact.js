import {useState} from 'react'
import {useForm} from 'react-hook-form'

function Contact() {


  const {register, handleSubmit, formState:{errors}}=useForm()

  let [usersList,setUsersList]=useState([])

  //form submission
  const onFormSubmit=(userObj)=>{
    // console.log(userObj)
    setUsersList([...usersList,userObj])
  }



  return (
    <div>
      <p className="display-3 text-center text-info">Contact Form</p>
      <form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input type="text" name="" id="username" className='form-control' {...register("username",{required:true, minLength:8})}/>
          {/* validation of error message */}
          {errors.username?.type==='required' && <p className='text-danger'>* Username is required</p>} 
          {errors.username?.type==='minLength' && <p className='text-danger'>* MinLength is 8</p>} 
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" className='form-control' {...register("email",{required:true})}/>
          {errors.email?.type==='required' && <p className='text-danger'>* Email is required</p>} 
        </div>
        {/* dob */}
        <div className="mb-3">
          <label htmlFor="dob">DOB</label>
          <input type="date" name="" id="dob" className='form-control' {...register("dob",{required:true})}/>
          {errors.dob?.type==='required' && <p className='text-danger'>* DOB is required</p>} 
        </div>
        {/* checkbox */}
        {/* <div className='mb-3'>
          <label>Skills</label>
          <div className='form-check'>
            <input type="checkbox" name="" id="html" className="form-check-input" {...register("skills")} value="html"/>
            <label htmlFor="html" className="form-check-label">HTML</label>
          </div>
          <div className='form-check'>
            <input type="checkbox" name="" id="css" className="form-check-input" {...register("skills")} value="css"/>
            <label htmlFor="css" className="form-check-label">CSS</label>
          </div>
          <div className='form-check'>
            <input type="checkbox" name="" id="js" className="form-check-input" {...register("skills")} value="javascript"/>
            <label htmlFor="js" className="form-check-label">JavaScript</label>
          </div>
        </div>
        {/* feedback */}
        {/* <div className="mb-3">
          <label htmlFor="feedback">Feedback</label>
          <textarea name="" id="feedback" rows="5" className='form-control' {...register("feedback",{required:true})}></textarea>
          {errors.feedback?.type==='required' && <p className='text-danger'>* feedback is required</p>} 
        </div>  */}
        {/* submit button */}
        <button type="submit" className="btn btn-success d-block mx-auto">
          Submit
        </button>
      </form>


      {/* displaying users content dynamically */}
      <p className="display-6 text-center text-danger mt-5">USERSLIST</p>
      <div className="container">
        {/* if users list is empty */}
        {usersList.length===0 && <h1 className='text-center text-warning'>No Users</h1>}
        {/* if not empty */}
        {usersList.length!==0 &&
          <table className="table mx-auto text-center table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {
                usersList.map((userObj,index)=><tr key={index}>
                  <td>{userObj.username}</td>
                  <td>{userObj.email}</td>
                  <td>{userObj.dob}</td>
                </tr>)
              }
            </tbody>
          </table>
        } 
      </div>

    </div>
  )
}

export default Contact
