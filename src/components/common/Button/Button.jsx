import s from './Button.module.css'
import React from 'react'


export let Button=(props)=>{
    return(<button className={`${s.button} ${s.button1}`} onClick={props.act}>{props.name}</button>)
}

