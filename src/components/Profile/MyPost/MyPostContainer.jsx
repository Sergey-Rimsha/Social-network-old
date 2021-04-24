import MyPost from './MyPost';
import {addPostActionCreator, chengeTextActionCreator} from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        chengePostText: state.profilePage.chengePostText,
        profileState: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    
        chengeText: (text) => {
            dispatch(chengeTextActionCreator(text));
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;