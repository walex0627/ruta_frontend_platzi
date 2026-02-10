import React from 'react';
import { withStorageListener } from '../hoc/withStorageListener';

function ChangeAlert({ show, toggleshow }) {

    if (show) {
        return (
            <>
                <p>Hubo cambios</p>
            </>
        )
    }

}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener };