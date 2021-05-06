import Dialogs from './Dialogs';
import { addMessegeAC} from '../../redux/dialogsReducer';
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
        addMessege: (text) => {
            dispatch(addMessegeAC(text));
        },
    }
}



const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer;
