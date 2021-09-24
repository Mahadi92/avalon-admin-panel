import React from 'react';
import AppLogo from '../image/AppLogo.svg';
import { useForm } from "react-hook-form";

const Form = ({ type }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



    return (
        <section className="lg:flex h-full login-section">
            <div className="w-full lg:w-1/2 h-full logo-section flex items-center justify-center">
                <img src={AppLogo} alt="" className="applogo w-2/4 rounded-full p-10" />
            </div>
            <div className="w-full lg:w-1/2 h-full flex items-center justify-center">

                <form action="" className="login-form p-5 rounded-2xl w-3/4" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-white text-4xl font-bold pb-10 text-center">Avalon Admin {type}</h1>

                    {
                        type === "registration" &&

                        <div className="pb-5">
                            <label htmlFor="userName">Full Name</label>
                            <input type="text" placeholder="Enter your full name" {...register("userName", { required: true })} required />
                        </div>
                    }
                    <div className="pb-5">
                        <label htmlFor="email">User Email</label>
                        <input type="email" id="email" placeholder="Email" {...register("email", { required: true })} required />
                    </div>

                    <div className="pb-5">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Enter your password" {...register("password", { required: true })} required />
                    </div>
                    {
                        type === "registration" &&
                        <div className="pb-5">
                            <label htmlFor="password">Repeat Password</label>
                            <input id="password" type="password" placeholder="Repeat your password" {...register("repeatPassword", { required: true })} required />
                        </div>
                    }
                    <div className="pb-5">
                        <input id="rememberMe" type="checkbox" {...register("rememberMe")} />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>

        </section>
    );
};

export default Form;