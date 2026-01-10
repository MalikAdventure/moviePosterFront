import type { FC } from 'react';

import { Link } from 'react-router-dom';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { ILogin } from './login.interface';

import AttractiveButton from '@/components/UI/buttons/attractiveButton/attractiveButton';
import FullButton from '@/components/UI/buttons/fullButton/fullButton';

const Login: FC = () => {
  const { register, handleSubmit, formState } = useForm<ILogin>({
    mode: 'onChange',
  });

  const emailError = formState.errors.email?.message;
  const passwordError = formState.errors.password?.message;

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    alert({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <section className='mb-15'>
        <h2 className='font-bold text-3xl text-white mb-5'>Вход</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='relative w-1/3'>
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
                message: 'Неправильная почта',
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
            autoComplete='current-password'
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
            <p className='text-1xl text-red-600'>{passwordError}</p>
          )}
          <div className='flex justify-between mt-5 mb-5'>
            <AttractiveButton type='submit'>Войти</AttractiveButton>
            <Link to='/register' className='text-blue-500 text-2xl'>
              У меня нет аккаунта
            </Link>
          </div>
          <p className='text-2xl text-center text-white mb-5'>
            Или войти через
          </p>
          <div className='flex flex-col gap-2 mb-5'>
            <FullButton>Войти с помощью Google</FullButton>
            <FullButton>Войти с помощью GitHub</FullButton>
            <FullButton>Войти с помощью Telegram</FullButton>
          </div>
          <p className='text-center'>
            <Link to='/' className='text-blue-500 text-2xl cursor-pointer'>
              Восстановить аккаунт
            </Link>
          </p>
          {/* Удалить !!! */}
          <Link to='/profile' className='bg-red-700'>
            В профиль
          </Link>
        </form>
      </section>
    </>
  );
};

export default Login;
