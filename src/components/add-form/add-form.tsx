import axios from 'axios';
import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, GREEN, RED } from '../../utils/styles';
import { NewUserData, validateEmail } from '../../utils/types';
import { ContentWrapper, AddPageWrapper, FormButtons } from './add-form-styles';
import { InputRow, InputLabel } from '../input/input-styles';
import InputField from '../input/input';
import { addUserAction } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Title, TopPanel } from '../admin-panel/admin-panel.styles';

const AddForm: FunctionComponent = (props) => {
    const [ userData, setUserData ] = useState<NewUserData>({name: "", email: ""});
    const [ emailInvalid, setEmailInvalid ] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCancel = () => {
        history.push('/');
    }

    const handleApply = () => {
        if (emailInvalid) {
            return;
        }
        axios.post('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data', {
            name: userData.name,
            email: userData.email
        })
        dispatch(addUserAction(userData));
        history.push("/");
    }

    const handleNameChange = (name: string) => {
        setUserData({ ...userData, name: name});
    }

    const handleEmailChange = (email: string) => {
        setEmailInvalid(!validateEmail(email));
        setUserData({ ...userData, email: email});
    }

    return (
        <AddPageWrapper>
            <TopPanel>
                <Title>Add Form</Title>
            </TopPanel>
            <ContentWrapper>
                <InputRow>
                    <InputLabel>Name</InputLabel>
                    <InputField onChange={(event) => handleNameChange(event.target.value)}/>
                </InputRow>
                <InputRow>
                    <InputLabel>Email</InputLabel>
                    <InputField validationMessage={"Email is invalid"} 
                                onChange={(event) => handleEmailChange(event.target.value)}
                                invalid={emailInvalid}
                    />
                </InputRow>
            <FormButtons>
                <Button onClick={handleCancel} color={RED}>Cancel</Button>
                <Button onClick={handleApply} color={GREEN}>Submit</Button>
            </FormButtons>
            </ContentWrapper>
        </AddPageWrapper>
    )
}


export default AddForm;