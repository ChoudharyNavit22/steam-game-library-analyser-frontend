/***
*  Created by Navit Choudhary
***/
import { Route, Routes } from 'react-router-dom';
import { Home, User} from 'views';
import { Layout } from './layout';


export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route exact path='/'
        element={
          <Layout><Home {...props} /></Layout>
        }
      />
      <Route exact path='/user/:id' element={
        <Layout><User {...props} /></Layout>
      }
      />
    </Routes >
  );
};