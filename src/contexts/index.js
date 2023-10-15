import PropTypes from 'prop-types';
import { LayoutContext, LayoutProvider } from './common/LayoutContext';

export {
    LayoutContext,
    LayoutProvider,
  };
  
  export const ContextManager = (props) => {
    const { children } = props;
    return (
        <LayoutProvider>
            {children}
        </LayoutProvider>
    );
  };
  
  ContextManager.propTypes = {
    children: PropTypes.node.isRequired
  };
  