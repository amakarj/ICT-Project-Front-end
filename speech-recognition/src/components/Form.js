import React from 'react';
import { useForm } from 'react-hook-form';

// Reusable Form Component
function Form({ template, onSubmit, watchFields}) {

    let { handleSubmit, watch, register} = useForm();
    let { title, fields } = template;

    let watchValues = watch(watchFields);
   

    const renderFields = (fields) => {
        return fields.map(field => {
            let { title, type, name, dynamic, } = field;

            let showField = dynamic ? watchValues[dynamic['field']] === dynamic['value'] : true;

            if(!showField) return null;

            switch (type) {
                case 'radio':
                    return (
                        <div key={name}>
                            <label htmlFor={name}>{title}</label>
                            <input type={type} name={name} />                           
                        </div>
                    )
               
                default:
                    return (
                        <div key={name}>
                            <span className="red-text">Invalid Field</span>
                        </div>
                    )
            }


        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>{title}</h4>
                {renderFields(fields)}
                <br />
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
}

export default Form;