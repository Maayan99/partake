import {createContext, useState, useContext, useEffect} from 'react';
import users from "@components/users";

const UserContext = createContext();

export const UserProvider = ({children, loggedIn}) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const storedUserId = sessionStorage.getItem('userId');
        setUserId(storedUserId);
    }, []);

    useEffect(() => {
        const foundUser = users.find((user) => user.id === userId);
        setUser(foundUser);
        setLoading(false);
    }, [userId]);

    if (loading || (!user && loggedIn)) {
        return <div>Loading...</div>;
    }

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )


};

export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};
