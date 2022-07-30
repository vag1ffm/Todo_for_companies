import React from 'react';
import {Link} from "react-router-dom";

const Groups = (props) => {

    function ChousenGroup() {
        props.setChosenGroup(props.id)
    }

    return (
        <Link to={`/${props.id}-${props.groupName}`} onClick={ChousenGroup}>
            <div className={'groupName'}>
                <div className="title">
                    <strong>
                        {props.index}
                    </strong>
                    <pre> {props.groupName}</pre>
                </div>
                <div className="delgroup">
                    <i className="material-icons red-text">
                        delete
                    </i>
                </div>
            </div>
        </Link>

    );
};

export default Groups;
