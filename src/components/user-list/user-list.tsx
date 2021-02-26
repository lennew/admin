import React, { FunctionComponent } from 'react';
import { UserTable } from './user-list.styles';
import TableRow from './user-row';
import { UserListProps } from './user-row.utils';
import Header from './header';
import { UserData } from '../../utils/types';


const UserList: FunctionComponent<UserListProps> = (props) => {
    return (
        <UserTable>
            <Header/>
            { props.users.length === 0 
                ? <span>No users available</span> 
                : <>
                    {props.users.map((user: UserData) => <TableRow key={user.id} user={user}/>)}
                </>
            }
        </UserTable>
    )
}

export default UserList;