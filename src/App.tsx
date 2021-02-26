import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AddForm from './components/add-form/add-form';
import AdminPanel from './components/admin-panel/admin-panel';
import ModalService from './components/modal/modal-service';
import { Wrapper } from './utils/styles';

const App: FunctionComponent = () => {
  return (
    <Wrapper>
        <BrowserRouter>    
          <Switch>
          <Route path="/add">
              <AddForm/>
            </Route>
            <Route path="/">
              <AdminPanel/>
            </Route>
          </Switch>
        </BrowserRouter>
        <ModalService/>
    </Wrapper>
  );
}

export default App;
