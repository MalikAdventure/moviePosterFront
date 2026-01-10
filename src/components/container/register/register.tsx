import type { FC } from 'react';

import { Link } from 'react-router-dom';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { IRegister } from './register.interface';

import AttractiveButton from '@/components/UI/buttons/attractiveButton/attractiveButton';
import FullButton from '@/components/UI/buttons/fullButton/fullButton';

const Register: FC = () => {
  const { register, handleSubmit, formState, watch } = useForm<IRegister>({
    mode: 'onChange',
  });

  const password = watch('password', '');

  const nameError = formState.errors.name?.message;
  const emailError = formState.errors.email?.message;
  const passwordError = formState.errors.password?.message;
  const repeatPasswordError = formState.errors.repeatPassword?.message;

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    alert({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <section className='mb-15'>
        <h2 className='font-bold text-3xl text-white mb-5'>Регистрация</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='relative w-1/3'>
          <p className='text-2xl text-white mb-2'>Имя пользователя</p>
          <input
            className='text-xl bg-neutral-300 text-neutral-800 px-2 rounded-xl w-full h-8 mb-2'
            type='text'
            placeholder='Введите ваш никнейм'
            {...register('name', {
              required: 'Это поле обязательно к заполнению',
              minLength: {
                value: 2,
                message: 'Необходимо хотя бы минимум 2 символа',
              },
              maxLength: {
                value: 16,
                message: 'Можно только максимум 16 символов',
              },
            })}
          />
          {nameError && (
            <p className='text-1xl text-red-600 mb-2'>{nameError}</p>
          )}
          <p className='text-2xl text-white mb-2'>Электронный адрес</p>
          <input
            className='text-xl bg-neutral-300 text-neutral-800 px-2 rounded-xl w-full h-8 mb-2'
            type='email'
            placeholder='Введите вашу почту'
            autoComplete='current-email'
            {...register('email', {
              required: 'Это поле обязательно к заполнению',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Неверная почта',
              },
            })}
          />
          {emailError && (
            <p className='text-1xl text-red-600 mb-2'>{emailError}</p>
          )}
          <p className='text-2xl text-white mb-2'>Пароль</p>
          <input
            className='text-xl bg-neutral-300 text-neutral-800 px-2 rounded-xl w-full h-8 mb-2'
            type='password'
            placeholder='Введите ваш пароль'
            autoComplete='new-password'
            {...register('password', {
              required: 'Это поле обязательно к заполнению',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
                message:
                  'Пароль должен быть не меньше 8 символов и содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
              },
            })}
          />
          {passwordError && (
            <p className='text-1xl text-red-600 mb-2'>{passwordError}</p>
          )}
          <p className='text-2xl text-white mb-2'>Повтор пароля</p>
          <input
            className='text-xl bg-neutral-300 text-neutral-800 px-2 rounded-xl w-full h-8 mb-2'
            type='password'
            placeholder='Введите ваш пароль повторно'
            autoComplete='new-password'
            {...register('repeatPassword', {
              required: 'Это поле обязательно к заполнению',
              validate: (value) =>
                value === password || 'Ваши пароли не совпадают',
            })}
          />
          {repeatPasswordError && (
            <p className='text-1xl text-red-600 mb-2'>{repeatPasswordError}</p>
          )}
          <div className='flex justify-between mt-5 mb-5'>
            <AttractiveButton type='submit'>Войти</AttractiveButton>
            <Link to='/login' className='text-blue-500 text-2xl'>
              У меня уже есть аккаунт
            </Link>
          </div>
          <p className='text-2xl text-center text-white mb-5'>
            Или войти через
          </p>
          <div className='flex flex-col gap-2'>
            <FullButton>Войти с помощью Google</FullButton>
            <FullButton>Войти с помощью GitHub</FullButton>
            <FullButton>Войти с помощью Telegram</FullButton>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
