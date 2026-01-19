import React from 'react';
import { Box, TextField, Button, Paper, Stack } from '@mui/material';
function TodoForm(){

    return (
            <Paper elevation={2} sx={{p:3, maxWidth:400, mx: 'auto', mt: 4}}>
                <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                onSubmit={(event)=>{
                    event.preventDefault();
                }}
                >
                    <TextField label= "Crea tus tareas" variant="outlined" fullWidth />
                    <Stack direction="row" justifyContent="space-between" >
                        <Button type="" variant='contained' color='error'>Cancelar</Button>
                        <Button type="submit" variant='contained' color='primary'>Crear</Button>
                    </Stack>
                </Box>
            </Paper>
    )
}

export { TodoForm };

