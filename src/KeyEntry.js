import React from "react";
import PropTypes from 'prop-types';

import "./KeyEntry.css";

const KeyEntry = ({ index, value, used, onClick }) => (
    <div className={`keyEntry ${used}`} onClick={() => onClick(index, used)}>
        {value}
    </div>
)

KeyEntry.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.oneOf([
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "New game"
    ]).isRequired,
    used: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

KeyEntry.defaultProps  = {
    used: false
}

export default KeyEntry;