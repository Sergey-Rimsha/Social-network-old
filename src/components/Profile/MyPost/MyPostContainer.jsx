import MyPost from './MyPost';
import {addPostActionCreator, chengeTextActionCreator} from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        chengePostText: state.profile.posts.chengePostText,
        profileState: state.profile.posts
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

const MyPostContainerSuper = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainerSuper;