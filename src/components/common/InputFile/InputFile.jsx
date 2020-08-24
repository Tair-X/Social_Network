import s from './InputFile.module.css'
import React from 'react'


export let InputFile=(props)=>{
    return(
        <div>

            <div className={s.example2}>
                <div className={s.formGroup}>
                    <input onChange={props.act} type="file" name="file" id="file" className={s.inputFile}/>
                        <label htmlFor="file" className={`${s.btn} ${s.btnTertiary} ${s.jsLabelFile}`}>
                            <i className={`${s.icon} ${s.fa} ${s.faCheck}`}></i>
                            <span  className={s.jsFileName}>Загрузить файл</span>
                        </label>
                </div>
            </div>
        </div>

    )
}

