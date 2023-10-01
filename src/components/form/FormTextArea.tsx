'use client'
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";


interface IInput {
    name: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    placeholder?: string;
    label?: string;
    rows?: number;
}

const FormTextArea = ({
    name,
    size = "large",
    value,
    placeholder = "",
    rows,
    label,
}: IInput) => {


    const { control } = useFormContext();
    return (
        <div>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Input.TextArea
                        size={size}
                        rows={rows}
                        style={{ width: "100%" }}
                        placeholder={placeholder}
                        {...field}
                        value={value ? value : field.value}
                    />
                )}
            />

        </div>
    )
}

export default FormTextArea;