
'use client'
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
    name: string;
    type?: string;
    size?: 'large' | 'small';
    placeholder?: string;
    value?: string | string[] | undefined;
    id?: string;
    validation?: object;
    label?: string;
}

const FormInput = ({
    name,
    type,
    size,
    placeholder,
    value,
    id,
    validation,
    label,
}: IInput) => {


    const { control } = useFormContext();

    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) =>
                    type === "password" ? (
                        <Input.Password
                            type={type}
                            size={size}
                            placeholder={placeholder}
                            {...field}
                            value={value ? value : field.value}
                        />
                    ) : (
                        <Input
                            type={type}
                            size={size}
                            placeholder={placeholder}
                            {...field}
                            value={value ? value : field.value}
                        />
                    )
                }
            />
        </>
    )
}

export default FormInput