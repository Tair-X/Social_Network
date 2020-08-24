import React from 'react';
import s from '../MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {Button} from "../../../common/Button/Button";

const AddPostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"textarea"} name="postText"/>
                </div>
                <div>
                    <Button name="Add post"/>
                </div>
            </form>
    )
}

export default reduxForm({form: 'profile-add-post'})(AddPostForm)
