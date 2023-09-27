import React from 'react';
import { Container } from 'react-bootstrap';
export default function Layout() {
  return (
    <div>
        <Container className='p-5'>
            <h1 className='text-center'>Admin Login</h1>
            <h3 className='text-center'>Nandini Portfolio Admin</h3>
            <input type="email" className='p-2 m-4 w-50 mx-auto form-control' placeholder='Enter email *' />
            <input type="password" className='p-2 m-3 w-50 mx-auto form-control' placeholder='Enter Password *' />
            <h5 className='text-center'>By clicking terms & conditions <input type='checkbox' /> and services.</h5>
            <div className='text-center'><button className='btn btn-primary w-50 '>Submit</button></div>
            <hr className='mx-auto w-50' />
            <div className='w-50 m-2 mx-auto border border-1'>
                <h5 className='text-center'>
                    <i className='bi bi-google'></i>
                </h5>
            </div>
            <div className='w-50 mx-auto m-2 border border-1'>
                <h5 className='text-center'>
                    <i className='bi bi-facebook'></i>
                </h5>
            </div>
        </Container>
    </div>
  )
}
