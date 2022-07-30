import React from 'react';
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import {useEffect} from "react";
import {connect} from "react-redux";
import {Get_Me, GetGroups} from "./actions/todos";


const mapStateToProps = (props) => ({
    listgroup: [props.todos.list]
});

const YourTodo = (props) => {
    const {title} = useParams()

    let propTypes = {
        Get_Groups: PropTypes.func.isRequired,
        Get_Me: PropTypes.func.isRequired,
    };

    useEffect(() => {
        props.GetGroups()
    }, [])




    return (
        <div>
            {props.chosengroup}
            {title}
        </div>
    );
};

// export default YourTodo;
export default connect(mapStateToProps, { GetGroups, Get_Me })(YourTodo);
