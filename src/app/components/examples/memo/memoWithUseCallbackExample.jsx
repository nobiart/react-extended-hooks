import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogout }) => {
    useEffect(() => {
        console.log("render button");
    });
    return <button className="btn btn-primary ms-2" onClick={onLogout}>Log Out</button>;
};

LogOutButton.propTypes = {
    onLogout: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button className="btn btn-primary me-2" onClick={() => setState(!state)}>Initiate Rerender</button>
            <MemoizedLogOutButton onLogOut={handleLogOut}/>
        </>
    );
};

export default MemoWithUseCallbackExample;
