import React, { FunctionComponent } from 'react';
import { rem } from '../../utils/styles';
import { Cell, RowWrapper } from './user-list.styles';

const Header: FunctionComponent = () => {
    return (
        <RowWrapper style={{ backgroundColor: "#F5F5F5", borderTop: `${rem(1)} solid gray`}}>
                <Cell>Id</Cell>
                <Cell>Name</Cell>
                <Cell>Username</Cell>
                <Cell>City</Cell>
                <Cell>Email</Cell>
                <Cell>Edit</Cell>
                <Cell>Delete</Cell>
        </RowWrapper>
    )
}

export default Header;