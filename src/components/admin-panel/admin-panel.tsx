import React, { FunctionComponent, useEffect, useState } from 'react';
import UserList from '../user-list/user-list';
import { Title, TopPanel, AdminPanelWrapper } from './admin-panel.styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from '../../redux/actions'
import { mapResultToUsers } from '../user-list/user-row.utils';
import { selectUsers } from '../../redux/selectors';
import { Button, GREEN } from '../../utils/styles';

const AdminPanel: FunctionComponent = () => {
    const [ fetchingError, setFetchingError ] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);

    useEffect(() => {
        if (users.length === 0) {
            axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
                .then(result => dispatch(fetchUsersAction(mapResultToUsers(result.data))))
                .catch(() => setFetchingError(true));
        }
    }, []);

    const handleAddClick = () => {
        history.push("/add");
    }

    return (
        <AdminPanelWrapper>
            <TopPanel>
                <Title>
                    User List
                </Title>
                <Button onClick={handleAddClick} color={GREEN}>New</Button>
            </TopPanel>
            {fetchingError ? "Error with loading data" : <UserList users={users}/>}
        </AdminPanelWrapper>
    )
}

export default AdminPanel;