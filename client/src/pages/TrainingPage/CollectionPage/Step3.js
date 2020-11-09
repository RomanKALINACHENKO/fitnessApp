import React,{useState} from 'react'
import { FileInput } from './FileInpt'
import {useForm} from 'react-hook-form'


export const Step3 = ()=>{
    
    const [data, setData] = useState({
        files:[]
    })
    const {control, handleSubmit} = useForm({
        defaultValues: {
            files: data.files
        }
    })
    
    const onSubmitHandler = (data) =>{
            setData(data)
    }
    console.log("data = ")
    console.log(data)
    return (
        <>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <FileInput name="files" control={control} />
            <button type="submit">Let's Set</button>
        </form>
        </>
    )
}