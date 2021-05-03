import Dialogs from './Dialogs';
import {chengeMessegeActionCreator, addMessegeActionCreator} from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        stateUsers: state.dialogs.users,
        stateMesseges: state.dialogs.messeges,
        chengeMessegeText: state.dialogs.chengeMessegeText,
        
    }

}

let mapDispatchToProps = (dispatch) => {

    return {
        addMessege: () => {
            dispatch(addMessegeActionCreator());
        },
    
        chengeMessege: (text) => {
            dispatch(chengeMessegeActionCreator(text));
        }
    }

}



const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer;
