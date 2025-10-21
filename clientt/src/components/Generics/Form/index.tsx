import React, { ReactNode, useState } from 'react';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';

export interface IForm {
  axiosCallHook: (payload: any) => any;
  children: ReactNode;
  rhfConfig: UseFormReturn<any>;
}

export default function Form(props: IForm) {
  const { axiosCallHook, children, rhfConfig } = props;

  const { handleSubmit } = rhfConfig;

  const onSubmitHandler: SubmitHandler<any> = async (info) => {
    try {
      await axiosCallHook({ ...info });
    } catch (err: any) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off" noValidate>
      {children}
    </form>
  );
}
