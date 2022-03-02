import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import Validations from './Validations';

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('이메일 형식에 맞게 작성 해주세요.')
      .required('이메일은 필수입력 항목 입니다.'),
    name: yup
      .string()
      .min(2, '최소 2글자 이상 입력해야 합니다.')
      .max(16, '최대 16글자 까지 입력할 수 있습니다.')
      .required('이름은 필수입력 항목 입니다.'),
    password: yup
      .string()
      .min(6, '최소 6글자 이상 입력해야 합니다.')
      .required('비밀번호는 필수입력 항목 입니다.'),
  })
  .required();

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await axios.post('/signup', data);
  };

  return (
    <StyledSignup>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-wrapper'>
          <label htmlFor='email' value='Email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            {...register('email')}
          />
          {errors.email && <Validations value={errors.email.message} />}
        </div>
        <div className='input-wrapper'>
          <label htmlFor='email' value='Email'>
            Name
          </label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            {...register('name')}
          />
          {errors.name && <Validations value={errors.name.message} />}
        </div>
        <div className='input-wrapper'>
          <label htmlFor='email' value='Email'>
            Password
          </label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && <Validations value={errors.password.message} />}
        </div>
        <input type='submit' />
      </form>
    </StyledSignup>
  );
}

const StyledSignup = styled.div`
  width: 100%;

  .input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
