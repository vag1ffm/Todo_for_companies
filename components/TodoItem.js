import React from 'react'

export default function TodoItem(props) {

    const cls = ['todo']
    if (props.item.completed) {
        cls.push('completed')
    }

    // console.log(props)
    return (
        <li className={ cls.join(' ') }>
            <label id={props.id} >
                <input
                    type="checkbox"
                    defaultChecked={props.item.completed}
                    onChange={() => {props.doneHandler(props.item, props.mainId)}}
                />
                <span>{props.item.title}</span>
               <div className={'person-and-trash'}>
                   <strong>{props.person}</strong>

               </div>
                <i className="material-icons red-text"
                         onClick={()=> props.delete(props.item.id, props.mainId)}
                >
                    delete
                </i>
            </label>
        </li>
    )
}