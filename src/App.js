import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = ({ fname, lname }) => {
    //console.log(data)
    setFname(fname)
    setLname(lname)
  }
  const handleChange = e => {
    e.preventDefault()
  }
  return (
    <div className='App'>
      <div className='container field'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <input
              type='text'
              id='fname'
              name='fname'
              placeholder='First Name'
              onChange={handleChange}
              ref={register({ required: true })}
            />
            {errors.fname && errors.fname.type === 'required' && <span>This is required</span>}
          </div>
          <div className='form-group'>
            <input
              type='text'
              id='lname'
              name='lname'
              placeholder='Last Name'
              onChange={handleChange}
              ref={register({ required: true })}
            />
            {errors.lname && errors.lname.type === 'required' && <span>This is required</span>}
          </div>
          <div className='form-group'>
            <button className='btn btn-primary btn-block'>CLICK ME !!!</button>
          </div>
        </form>
        <p>
          My name is {fname} {lname}{' '}
        </p>
      </div>
    </div>
  )
}

export default App
