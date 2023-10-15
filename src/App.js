/***
 *  Created by Navit Choudhary
 ***/
import { useEffect } from 'react';
import { AppRoutes } from './bricks/index';
import { ContextManager } from 'contexts';
import { Notification, GlobalStyles } from 'components';
import { ThemeProvider } from 'theme';

const App = (props) => {
  useEffect(() => {
    document.title = process.env.REACT_APP_NAME;
  }, []);
  return (
    <ContextManager>
      <ThemeProvider>
          <AppRoutes {...props} />
          <GlobalStyles />
          <Notification />
      </ThemeProvider>
    </ContextManager>
  );
};

export default App;
