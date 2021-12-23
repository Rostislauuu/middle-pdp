import React from "react";
import { connect } from "react-redux";

import { increaseCount } from "../redux/actions/userProfile";

const ReduxPersist = ({ count, increaseCount }) => {
    return (
        <div>
            {count}

            <button onClick={() => increaseCount()}>
                +
            </button>
        </div>
    )
}

export default connect(
    state => ({
        count: state.userProfile.count
    }), {
        increaseCount
    }
)(ReduxPersist);
