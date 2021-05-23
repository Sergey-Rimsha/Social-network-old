import React from 'react';

const ProfileDataForm = ({profile}) => {
    return (
        <>  
            <div>
                <button onClick={goToEditMode}>
                    save
                </button>
            </div>
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


export default ProfileDataForm;