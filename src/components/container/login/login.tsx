import type { FC } from 'react';

import { Link } from 'react-router-dom';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { ILogin } from './login.interface';

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
            <button
              type='submit'
              className='bg-blue-500 text-2xl w-50 rounded-xl'
            >
              Войти
            </button>
            <Link to='/register' className='text-blue-500 text-2xl'>
              У меня нет аккаунта
            </Link>
          </div>
          <p className='text-2xl text-center text-white mb-5'>
            Или войти через
          </p>
          <button className='text-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-300 text-neutral-800 px-2 rounded-xl w-full h-8 mb-2 cursor-pointer'>
            Войти с помощью Google
          </button>
          <button className='text-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-300 text-neutral-800 px-2 rounded-xl w-full h-8 mb-2 cursor-pointer'>
            Войти с помощью GitHub
          </button>
          <button className='text-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-300 text-neutral-800 px-2 rounded-xl w-full h-8 mb-5 cursor-pointer'>
            Войти с помощью Telegram
          </button>
          <p className='text-center'>
            <Link to='/' className='text-blue-500 text-2xl cursor-pointer'>
              Восстановить аккаунт
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
