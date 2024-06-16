import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../ProviderContext/ProviderContext';
const PrivateRoutes = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    if(loader)
    {
        return (
          <div className="max-w-3xl mx-auto text-center border rounded shadow-lg">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        );
    }
    else if(user)
        {
            return children;
        }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};
PrivateRoutes.propTypes={
    children:PropTypes.node
}
export default PrivateRoutes;