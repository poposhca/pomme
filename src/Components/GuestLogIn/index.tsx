import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserName from '../../Utils/UserName';

const GuestLogin = () => {
    const userNameStorage = new UserName();
    const userNameInput = React.useRef(null);
    const onSubmit = (): void => {
        const currentObject: any = userNameInput.current;
        userNameStorage.saveName(currentObject.value);
    };

    return (
        <form>
            <TextField inputRef={userNameInput} id='name' label='Nombre' />
            <Button color="primary" onClick={onSubmit}>Entrar</Button>
        </form>
    );
};

export default GuestLogin;
