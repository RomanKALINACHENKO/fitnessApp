import React from 'react'
import {Controller} from 'react-hook-form'
import {InsertDriveFile,CloudUpload} from '@material-ui/icons'
import {Paper,List,ListItem,ListItemIcon,ListItemText, makeStyles} from '@material-ui/core'
import DropZone from 'react-dropzone'

const useStyles = makeStyles(() =>({
    root: {
        backgroundColor: '#eee',
        textAlign: 'center',
        width: '50%',
        height: '110px',
        margin: ' 0 auto',
        cursor: 'pointer',
        color: '#333',
        padding: '10px',
        marginTop: '20px'
    },
    icon: {
        marginTop: '0px',
        color: '#888',
        fontSize: '42px'
    }
}))

export const FileInput = ({control, name})=>{
   const styles = useStyles()

    return (

        <Controller control={control} name={name} defaultValue={[]} render={({onChange, onBlur, value})=>{
            return(<>
                    <DropZone onDrop={onChange} > 
                        {
                            ({getRootProps, getInputProps})=>(
                            <Paper className={styles.root} variant="outlined" {...getRootProps()}>
                                <CloudUpload className={styles.icon}  />
                                <input {...getInputProps()} name={name} onBlur={onBlur}  />
                                <p>Drag 'n' drop file here or click to select files</p>
                            </Paper>)
                        }
                    </DropZone>
                    <List>
                        {
                            value.map((f, index)=>(
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile/>
                                    </ListItemIcon>
                                    <ListItemText primary={f.name} secondary={f.size} />
                                </ListItem>
                            ))
                        }
                    </List>
                        
                        
                   </>)
        }} /> 
         )
}