import React, { useState } from 'react';
import userData from '../data/userData.json';
import { useForm } from "react-hook-form";

const Page1 = () => {
    const [modal, setModal] = useState(false);
    const [editData, setEditData] = useState({});

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleEditModal = (data) => {
        setEditData(data)
        setModal(true)
        console.log(editData);
    }
    return (
        <div className="relative h-full">
            <h1 className="text-4xl text-center"> PP Page 1</h1>

            <table>
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 py-4">
                    {
                        userData.map(data => {
                            const { name, email, role } = data;
                            return (
                                <tr key={Math.random()}>
                                    <td className="px-6 py-4 whitespace-nowrap">{name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{role}</td>
                                    <td className="text-center">
                                        <button className="text-yellow-700 bg-yellow-100 p-2 rounded-full hover:bg-yellow-300" onClick={() => {
                                            setEditData(data)
                                            setModal(true)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td className="text-center">
                                        <button className="text-red-700 bg-red-100 p-2 rounded-full hover:bg-red-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {
                modal &&
                <div className="absolute top-0 w-full h-full bg-gray-800 bg-opacity-25 flex justify-center items-center">
                    <div className="modalForm">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="modalEl">
                                <input type="text" {...register("name")} defaultValue={editData.name} placeholder="Update the name" />
                            </div>
                            <div className="modalEl">
                                <input type="text" {...register("email")} defaultValue={editData.email} placeholder="Update the email" />
                            </div>
                            <div className="modalEl">
                                <select name="" id="" {...register("role")} defaultValue={editData.role}>
                                    <option value="admin">Admin</option>
                                    <option value="superAdmin">Super Admin</option>
                                    <option value="manager">Manager</option>
                                </select>
                            </div>
                            <div className="flex justify-end w-full pt-5">
                                <button className="px-8 py-3 bg-red-300 text-white rounded-md ml-2 hover:bg-red-400 block" onClick={() => {
                                    setModal(false)
                                    setEditData({})
                                }}>Cancel</button>
                                <button type="submit" className="px-8 py-3 bg-green-300 text-white rounded-md ml-2 hover:bg-green-400 block">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            }

            <div className="py-10">
                <h2 className="text-4xl mb-5">Add New</h2>
                <input type="text" className="py-3 px-5 rounded-md" placeholder="Add New User" />
                <button className="px-8 py-3 bg-blue-300 text-white rounded-md ml-2 hover:bg-blue-400">Add</button>
            </div>
        </div>
    );
};

export default Page1;