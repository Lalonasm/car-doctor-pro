import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const Page = () => {
    const handleLogin = async () => {

    }
    return
    <div className="container mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <Image src={'/assets/images/login/login.svg'} height={'440'} width={'540'} alt="login image" />
            </div>
            <div className="p-12 border-2">
                <h6 className="text-3xl font-semibold text-center text-primary mb-12">Sign In</h6>
                <form onSubmit={handleLogin} action="">
                    <label htmlFor="name">Name</label> <br />
                    <input
                        type="text"
                        name="name"
                        className="mt-3 input input-bordered w-full "
                        placeholder="Your Name" /> <br /><br />
                    <label htmlFor="email">Email</label> <br />
                    <input
                        type="text"
                        name="email"
                        className="mt-3 input input-bordered w-full "
                        placeholder="Your Email" /> <br /><br />
                    <label htmlFor="password">Password</label> <br />
                    <input
                        type="text"
                        name="password"
                        className="mt-3 input input-bordered w-full mb-2"
                        placeholder="Your Password" />
                    <br />
                    <button type="submit" className="btn btn-primary w-full mt-4"> Sign In </button>
                </form>
                <h6 className="my-12 text-center">Or Sign In with</h6>
                <div className="flex items-center  justify-center space-x-3">
                    <button className="btn p-6 flex items-center text-green-500 justify-center">
                        <FaGoogle />

                    </button>
                    <button className="btn p-6 flex items-center text-primary justify-center">

                        <FaGithub />
                    </button>
                </div>
                <h6 className="my-12 text-center">Already Have an Account? <Link className="text-primary font-semibold" href={'/login'}>Sign In</Link></h6>

            </div>
        </div>
    </div>
}

export default Page