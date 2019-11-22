import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}            
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>            
            {
                props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>No Dice!</p>)
            }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="Details Are Here"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Details Are Here"/>, document.getElementById('app'));