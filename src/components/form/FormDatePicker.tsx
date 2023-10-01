'use client'
import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";


interface IInput {
    onChange?: (valOne: Dayjs | null, valTwo: string) => void;
    name: string;
    size?: "large" | "small";
    value?: Dayjs
    label?: string;


}

const FormDatePicker = ({
    name,
    size = "large",
    label,
    onChange,
}: IInput) => {


    const { control, setValue } = useFormContext();
    const handleChange: DatePickerProps["onChange"] = (date, dateString) => {
        if (onChange) {
            onChange(date, dateString);
        }
        setValue(name, dateString);
    };
    return (
        <div>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    < DatePicker
                        size={size}
                        style={{ width: "100%" }}
                        value={dayjs(field.value) || ""}
                        onChange={handleChange}
                    />
                )}
            />

        </div>
    )
}

export default FormDatePicker;