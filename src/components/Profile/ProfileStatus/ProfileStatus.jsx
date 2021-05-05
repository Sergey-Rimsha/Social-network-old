
import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        
        this.props.setStatus(this.state.status);
    }

    chengeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value 
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.status || '---'}</span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input onChange={this.chengeStatus} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;