import { createContext, useState } from 'react';

export const LoginContext = createContext(null);
// export const LocationContext = createContext(null);

const DataProvider = ({children}) => {

    const [ account, setAccount ] = useState('');
    
    return (
        
            <LoginContext.Provider value={{ account, setAccount }}>
                {children}
            </LoginContext.Provider> 

        
    )
}

export default DataProvider;