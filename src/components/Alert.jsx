import Msg from 'react-bootstrap/Alert';
import { useState,useContext,createContext,useEffect } from 'react';
import { AlertContext } from '../App';

const defaultValue = { show: false, variant: '', content: '' }

function Alert(){
    // const {showAlert,setShowAlert} = useContext(AlertContext)
    const {alert, setAlert} =  useContext(AlertContext)
    useEffect(
        () => {
            if(alert.show){
                setTimeout(
                    () => {
                        setAlert(defaultValue)
                    },6000
                )
            }
        },[alert,setAlert]
    )

    console.log(alert.show)

    if(alert.show){
        return (
            <Msg variant={alert.variant} dismissible={true} onClose={() => {setAlert(defaultValue)}}>
                {alert.content}
            </Msg>
        )
    }
}

export default Alert;