import { FormProvider, SubmitErrorHandler, useForm } from "react-hook-form";

type FormConfig = {
    defaultValues?: Record<string, any>;
}

type FormProps = {
    children: React.ReactNode;
    submitHandler: SubmitErrorHandler<any>;
} & FormConfig;

const Form = ({
    children,
    submitHandler,
    defaultValues,
}: FormProps) => {

    const FormConfig: FormConfig = {};

    if (!!defaultValues) FormConfig['defaultValues'] = defaultValues as FormConfig['defaultValues'];

    const methods = useForm()

    const { handleSubmit, reset } = methods;
    const onSubmit = (data: any) => {
        submitHandler(data);

    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

export default Form