import React, {useEffect} from 'react';

function User(props) {

    useEffect(() => {
        console.log(user)
    })
    let {user} = props
    return (
        <div>
            {
                user !== null && <div>{user.name}</div>
            }
        </div>
    );
}

export default User;