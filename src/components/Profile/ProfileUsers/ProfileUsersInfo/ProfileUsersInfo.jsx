import React,{useState} from 'react';
import ProfileReduxDataForm from './ProfileDataForm';

const ProfileUsersInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        setEditMode(false)
        props.setProfile()
    }

    // const onSubmit = (formData) => {
    //     saveProfile(formData).then(
    //         () => {
    //             setEditMode(false);
    //         }
    //     );
    // }

    return (
        <>
            {editMode ? 
                <ProfileReduxDataForm 
                    onSubmit={onSubmit}
                    profile={props.profile}/> : 
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
                {isOwner && <div> <button onClick={goToEditMode} >edit</button> </div> }
        </>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        
        <div>
            {
                !contactValue ? 
                '': <div>{contactTitle}: <span>{contactValue}</span></div>
            }
            
        </div>
    )
}

export default ProfileUsersInfo;