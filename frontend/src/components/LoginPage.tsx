import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Form, useNavigate} from "react-router-dom";
type Props = {
    login:(username:string,password:string)=> Promise<void>;
}

function LoginPage(props:Props) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const nav = useNavigate();

    function loginOnSubmit(e:ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        props.login(username,password)
            .then( () => nav("/cars") );
    }



    function onChangeHandlerUsername(e:ChangeEvent<HTMLInputElement>){
        setUsername(e.target.value)
        console.log(e)
    }

    return (
        <div>
            <h1>Login:</h1>
            <Form onSubmit={loginOnSubmit}>
                <input type="text" onChange={onChangeHandlerUsername}/>
                <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit" >LOGIN</button>
            </Form>
        </div>
    );
}

export default LoginPage;