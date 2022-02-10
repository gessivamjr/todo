import React from 'react'
import Card from './Card'

export default function Modal(props){
    

    function hideModal(event){
        const target = event.target
        if(target.id === 'modal'){
            props.onHideModal()
        }
    }

    return (
        <div id="modal" className={props.show? 'modal' : 'modal hide'} onClick={hideModal}>
        <Card className="cardModal">
            {props.children}
        </Card>
        </div>
    )
}