import React from 'react';

export interface InputProps extends React.ComponentPropsWithRef<'input'>{
    children?: React.ReactNode,
    type: string,
    placeholder: string
}

export interface CreateVoterRequest {
    name: string;
    dob: Date;
    address: string;
    city: string;
    state: string;
    email: string;
    mobile: string;
    password: string;
    confirmPassword: string;
}
  
