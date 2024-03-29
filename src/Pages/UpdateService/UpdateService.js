import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const UpdateService = () => {
    const [service, setService] = useState({})
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [id])


    const handleDescriptionChange = e => {
        console.log(e.target.value);
        const updateDescription = e.target.value;
        const updatedService = { title: service.title, duration: service.duration, rating: service.rating, description: updateDescription, price: service.price, img: service.img }
        setService(updatedService)
    };

    const handleDurationChange = e => {
        console.log(e.target.value);
        const updateDuration = e.target.value;
        const updatedService = { title: service.title, duration: updateDuration, rating: service.rating, description: service.description, price: service.price, img: service.img }
        setService(updatedService)
    };



    const handlePriceChange = e => {
        console.log(e.target.value);
        const updatePrice = e.target.value;
        const updatedService = { title: service.title, duration: service.duration, rating: service.rating, description: service.description, price: updatePrice, img: service.img }
        setService(updatedService)
    };

    const handleImgUrlChange = e => {
        console.log(e.target.value);
        const updateImgUrl = e.target.value;
        const updatedService = { title: service.title, duration: service.duration, rating: service.rating, description: service.description, price: service.price, img: updateImgUrl }
        setService(updatedService)
    };







    const onSubmit = data => {
        console.log(data);

        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');
                }
                console.log(data)
            })


        // axios.post('https://radiant-hollows-38398.herokuapp.com/packages/:id', data)
        //  .then(res => {
        //      if (res.data.insertedId) {
        //          alert('Succesfully Added New Service')
        //      }
        //      console.log(res);
        //      reset();
        //  })
    }



    return (
        <div className="add-service">
            <h1> Update {service?.title} Package</h1>

            <form onSubmit={handleSubmit(onSubmit)}>


                <textarea  {...register("description")} placeholder="Description" onChange={handleDescriptionChange} value={service.description || ''} />

                <input {...register("duration", { required: true })} placeholder="Duration" onChange={handleDurationChange} value={service?.duration || ''} />



                <input type="number" {...register("price")} placeholder="price" value={service.price || ''} onChange={handlePriceChange} />

                <input {...register("img")} placeholder="image url" value={service.img || ''} onChange={handleImgUrlChange} />
                <input type="submit" className="btn btn-primary" />
            </form>


        </div>
    );
};

export default UpdateService;