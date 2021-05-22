
import React, { useEffect, useState } from 'react';


const ProfileStatusHooks = (props) => {

    // hooks -> useState, useEffect
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.setStatus(status);
    }

    const chengeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>                    
                    <span onDoubleClick={activateEditMode}>{status || '---'}</span>
                </div>
            }
            {editMode && 
                <div>
                    <input onChange={chengeStatus} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
                </div>
            }
        </div>
    )
}

export default ProfileStatusHooks;