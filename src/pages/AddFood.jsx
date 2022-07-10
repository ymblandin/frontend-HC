import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { FridgeContext } from '../contexts/FridgeContext';

const schema = yup
  .object({
    food: yup.string().trim().required('Aliment est un champ requis !'),
    quantity: yup
      .number('Quantité doit être un nombre !')
      .positive('Quantité doit être un nombre positif !')
      .integer('Quantité doit être un nombre entier !')
      .required('Quantité est un champ requis !'),
  })
  .required();

function AddFood() {
  const { fridge, setFridge } = useContext(FridgeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { food: '', quantity: '' },
  });

  const onSubmit = (data) => {
    // Check if the food already exist in the fridge. If yes increase the quantity as per the user input
    if (
      fridge.find((item) => item.food.toLowerCase() === data.food.toLowerCase())
    ) {
      let increaseQuantity = fridge.map((item) => {
        return item.food.toLowerCase() === data.food.toLowerCase()
          ? { ...item, quantity: item.quantity + data.quantity }
          : { ...item };
      });
      setFridge(increaseQuantity);
      reset();
      // If the food does not exist add it to the fridge
    } else {
      let addFood = fridge;
      addFood.push(data);
      setFridge(addFood);
      reset();
    }
  };

  return (
    <div className='AddFood'>
      <h1>Ajouter des aliments dans le frigo !</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='food'>Aliment : </label>
        <input {...register('food')} id='food' />
        <p>{errors.food?.message}</p>
        <br />
        <label htmlFor='quantity'>Quantité : </label>
        <input {...register('quantity')} id='quantity' />
        <p>{errors.quantity?.message}</p>

        <input type='submit' value={"Ajouter l'aliment au frigo"} />
      </form>
    </div>
  );
}

export default AddFood;
