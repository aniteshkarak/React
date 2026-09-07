import React from "react";

const UserContext = React.createContext();

export default UserContext;

// Provider is a component that will wrap the components that need access to the context. 
// It will provide the context value to the components that are wrapped inside it.

{/* <UserContext>
    <login/>
    <Card>
        <Dashboard/>
    </Card>
</UserContext> */}
