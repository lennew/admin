import axios from 'axios';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, RED, GREEN, rem } from '../../utils/styles';
import Modal from '../modal/modal';
import { Cell, RowWrapper } from './user-list.styles';
import { RowProps } from './user-list.types';
import { deleteUserAction, editUserAction } from '../../redux/actions';
import { ModalButtons, ModalTitle, ModalWrapper } from '../modal/modal.styles';
import InputField from '../input/input';
import { InputRow, InputFields, InputLabel } from '../input/input-styles';
import { UserData, validateEmail } from '../../utils/types';

const TableRow: FunctionComponent<RowProps> = (props) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ modalContent, setModalContent ] = useState<ReactNode>();
    const [ editedUser, setEditedUser ] = useState<UserData>(props.user);
    const [ emailInvalid, setEmailInvalid ] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        setModalContent(deleteModalContent);
        setIsModalOpen(true);
    };

    const handleEdit = () => {
        setModalContent(editModalContent);
        setIsModalOpen(true);
    };

    useEffect(() => {
        setModalContent(editModalContent);
    }, [ editedUser ]);

    const deleteUser = () => {
        axios.delete(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${props.user.id}`);
        dispatch(deleteUserAction(props.user.id));
        setIsModalOpen(false);
    }

    const editUser = () => {
        if (emailInvalid) {
            return;
        }
        axios.patch(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${props.user.id}`, editedUser);
        dispatch(editUserAction(editedUser));
        setIsModalOpen(false);
    };

    const handleEditCancel = () => {
        setEditedUser(props.user);
        setIsModalOpen(false);
    }

    const deleteModalContent = (
        <ModalWrapper>
            <ModalTitle>
                Do you want to delete user?
            </ModalTitle>
            <ModalButtons>
                <Button onClick={() => setIsModalOpen(false)} color={RED}>No</Button>
                <Button onClick={deleteUser} color={GREEN}>Yes</Button>
            </ModalButtons>
        </ModalWrapper>
        )

    
    const handleNameChange = (name: string) => setEditedUser({ ...editedUser, name: name });
    const handleUserNameChange = (userName: string) => setEditedUser({ ...editedUser, username: userName });
    const handleCityChange = (city: string) => setEditedUser({ ...editedUser, address: { ...editedUser.address, city: city }});
    const handleEmailChange = (email: string) => {
        setEmailInvalid(!validateEmail(email));
        setEditedUser({ ...editedUser, email: email });
    }

    const editModalContent = () => (
        <ModalWrapper>
            <ModalTitle>Edit user</ModalTitle>
            <InputFields>
                <InputRow>
                    <InputLabel>Name</InputLabel>
                    <InputField onChange={(event) => handleNameChange(event.target.value)} 
                                defaultValue={props.user.name}
                    />
                </InputRow>
                <InputRow>
                <InputLabel>Email</InputLabel>
                    <InputField onChange={(event) => handleEmailChange(event.target.value)}
                                defaultValue={props.user.email}
                                validationMessage="Email is invalid"
                                invalid={emailInvalid}
                    />
                </InputRow>
                <InputRow>
                <InputLabel>Username</InputLabel>
                    <InputField onChange={(event) => handleUserNameChange(event.target.value)}
                                defaultValue={props.user.username}
                    />
                </InputRow>
                <InputRow>
                <InputLabel>City</InputLabel>
                    <InputField onChange={(event) => handleCityChange(event.target.value)}
                                defaultValue={props.user.address.city}
                    />
                </InputRow>
            </InputFields>
            <ModalButtons>
                <Button onClick={handleEditCancel} color={RED}>Cancel</Button>
                <Button onClick={editUser} color={GREEN}>Accept</Button>
            </ModalButtons>
        </ModalWrapper>
    );

    return (
        <RowWrapper>
            { props.user &&
                <> 
                    <Cell>{props.user.id}</Cell>
                    <Cell>{props.user.name}</Cell>
                    <Cell>{props.user.username}</Cell>
                    <Cell>{props.user.address.city}</Cell>
                    <Cell>{props.user.email}</Cell>
                    <Cell><Button onClick={handleEdit}>Edit</Button></Cell>
                    <Cell><Button onClick={handleDelete} color={RED}>Delete</Button></Cell>
                </>
            }
            <Modal isOpen={isModalOpen} content={modalContent}/>
        </RowWrapper>
    )
}

export default TableRow;