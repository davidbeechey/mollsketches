import { useField } from "formik";
import InputWrapper, { FieldProps } from "./InputWrapper";

interface TextAreaInputProps extends FieldProps {
    placeholder?: string;
    required?: boolean;
    description?: string;
    className?: string;
}

const TextAreaInput = (props: TextAreaInputProps) => {
    const [field, meta] = useField(props);

    return (
        <InputWrapper meta={meta} {...props}>
            <textarea {...field} {...props} />
        </InputWrapper>
    );
};

export default TextAreaInput;
