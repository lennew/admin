import React, { FunctionComponent } from 'react';
import { StyledInput, ValidationMessage, InputWrapper } from './input-styles'

interface InputFieldProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    validationMessage?: string;
    invalid?: boolean;
}

const InputField: FunctionComponent<InputFieldProps> = (props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange?.(event);
    };

    return (
        <InputWrapper>
            <StyledInput {...props} onChange={handleChange}/>
            { props.invalid && <ValidationMessage>{props.validationMessage}</ValidationMessage>}
        </InputWrapper>
    )
}

export default InputField;