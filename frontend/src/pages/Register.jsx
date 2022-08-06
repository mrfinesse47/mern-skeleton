import React from 'react';
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData; //neat trick to not have to have multiple use states

  const onChange = () => {};

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            placeholder='Enter Your Name'
            onChange={onChange}
          />
        </form>
      </section>
    </>
  );
};

export default Register;
