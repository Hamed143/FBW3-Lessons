import React from 'react'

export default function User(props) {
    return (
        <div>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
            </tr>
        </div>
    )
}