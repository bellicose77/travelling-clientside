import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert("add Successfully");
                    reset();
                }
            })
    }
    return (
        <div className="add-service m-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input type="text" {...register("duration")} placeholder="duration" />
                <input {...register("img")} placeholder="imgurl" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;