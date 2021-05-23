import React from 'react';

const ProfileUsersInfo = (props) => {
    const editMode = true;
    return (
        <>
            {editMode ? <ProfileData profile={props.profile}/> : <ProfileDataForm profile={props.profile} />}
        </>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            <div>
                {/* {isOwner && <div> <button onClick={goToEditMode} >edit</button> </div> } */}
                <span>About Me:</span>
                <div>
                    {profile.aboutMe || `---`}
                </div>
                <div>
                    looking for aJob: {profile.lookingForAJob ? 'Yes' : 'No' }
                </div>
                <div>
                    my professional skills: {profile.lookingForAJobDescription}
                </div>
            </div>                    
            <div> 
                <span>Vebsite:</span>
                {
                    Object.keys(profile.contacts).map(key => {
                       return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })
                }
            </div>
        </>
    )
}

const ProfileDataForm = ({profile}) => {
    return (
        <>
            <div>
                <span>About Me:</span>
                <div>
                    {profile.aboutMe || `---`}
                </div>
                <div>
                    looking for aJob: {profile.lookingForAJob ? 'Yes' : 'No' }
                </div>
                <div>
                    my professional skills: {profile.lookingForAJobDescription}
                </div>
            </div>                    
            <div> 
                <span>Vebsite:</span>
                {
                    Object.keys(profile.contacts).map(key => {
                       return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })
                }
            </div>
            <div>
                <button>Settings</button>
            </div>
        </>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>{contactTitle}: <span>{contactValue}</span></div>
    )
}

export default ProfileUsersInfo;