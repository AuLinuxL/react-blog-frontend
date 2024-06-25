import { Button } from "antd";

function Dialog({msg,accept,cancel}){
    return(
        <div className="dialog">
            <div className="dialog-btn-info">
                <h5 className="dialog-msg">{msg}</h5>
            </div>
            <div className='dialog-btn-container'>
                <Button type="primary" onClick={accept}>Yes</Button>
                <Button type="primary" danger onClick={cancel}>Cancel</Button>
            </div>
        </div>
    )
}

export default Dialog;