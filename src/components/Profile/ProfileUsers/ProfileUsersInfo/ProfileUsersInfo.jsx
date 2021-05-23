import React,{useState} from 'react';
import ProfileDataForm from './ProfileDataForm.';

const ProfileUsersInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <>
            {editMode ? 
                <ProfileDataForm profile={props.profile}/> : 
                <ProfileData 
                    profile={props.profile} 
                    goToEditMode={() => setEditMode(true)}
                    isOwner={props.isOwner} />}
        </>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            <div>
                {isOwner && <div> <button onClick={goToEditMode} >edit</button> </div> }
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

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>{contactTitle}: <span>{contactValue}</span></div>
    )
}

export default ProfileUsersInfo;