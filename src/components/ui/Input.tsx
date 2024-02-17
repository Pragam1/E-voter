import React, {forwardRef} from 'react'
import { InputProps } from '@/types/interface';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <label className="input input-bordered flex items-center gap-2">
            <input className="grow" ref={ref} {...props} />
        </label>
    )
})

Input.displayName = 'Input';
export default Input