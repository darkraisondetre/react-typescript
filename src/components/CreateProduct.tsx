import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../models'
import { ErrorMessage } from './ErrorMessage'
// import { v4 } from 'uuid';

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
  const [values, setValues] = useState<IProduct>({
    title: "product title",
    price: 10,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
      rate: 42,
      count: 10
    }
  })
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    // @TODO сделать адекватную валидацию формы 

    if(values.title.trim().length === 0) {
      setError('Enter valid title')
      return
    }


    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', {...values})

    onCreate(response.data)
  }

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        name="title"
        value={values.title}
        onChange={changeHandler}
      />
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product price..."
        name="price"
        value={values.price}
        onChange={changeHandler}
      />
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product description..."
        name="description"
        value={values.description}
        onChange={changeHandler}
      />
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product category..."
        name="category"
        value={values.category}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
    </form>
  )
}