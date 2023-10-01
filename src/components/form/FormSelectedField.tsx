'use client'
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface SelectOptions {
    label: string;
    value: string;
}

interface IInput {
    options: SelectOptions[];
    name: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    placeholder?: string;
    label?: string;
    defaultValue?: SelectOptions;
}

const FormSelectedField = ({
    name,
    size = "large",
    value,
    placeholder = "Select",
    options,
    label,
    defaultValue,
}: IInput) => {


    const { control } = useFormContext();
    return (
        <div>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <Select
                        onChange={onChange}
                        size={size}
                        options={options}
                        value={value}
                        style={{ width: "100%" }}
                        placeholder={placeholder}

                    />
                )}
            />

        </div>
    )
}

export default FormSelectedField;