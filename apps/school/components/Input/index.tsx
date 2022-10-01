import { forwardRef } from 'react'

interface InputProps {
    name: string,
    type?: string,
    label: string,
    defaultValue?: string,
    placeholder?: string, 
    onChange?: (e: any) => void,
    className?: string
    maxLength?: number
}


const Input = forwardRef<HTMLInputElement, InputProps>(({name, type="text", label, defaultValue, placeholder, onChange, className = "", maxLength = 50}, ref) => {
    return (
        <div>
            {label ?
            <label htmlFor={name} className="font-bold text-gray-800 text-sm">{label}</label>
            : null}
            <input 
            type={type} 
            defaultValue={defaultValue} 
            ref={ref} 
            name={name} 
            onChange={onChange}
            autoComplete="off"
            autoCorrect="off"
            className={`form-control form-control-heigt mt-1 ${className}`} 
            placeholder={placeholder} 
            required
            maxLength={maxLength}
            />
        </div>
    )
})

Input.displayName = "Input";

export default Input