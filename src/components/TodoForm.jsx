import React from 'react';
import { TodoContext } from '../context/TodoContext';
import { Box, TextField, Button, Paper, Stack } from '@mui/material';
function TodoForm() {
    
    const [newValue, setNewValue] = React.useState('');
    const onChange = (event) =>{
        setNewValue(event.target.value)
    } 
    
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newValue)
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }


    return (
        <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                onSubmit={onSubmit}
            >
                <TextField value={newValue} onChange={onChange} label="Crea tus tareas" variant="outlined" fullWidth />
                <Stack direction="row" justifyContent="space-between" >
                    <Button variant='contained' color='error' onClick={onCancel}>Cancelar</Button>
                    <Button type="submit" variant='contained' color='primary'>Crear</Button>
                </Stack>
            </Box>
        </Paper>
    )
}

export { TodoForm };

