import { Button } from "./style";

import sendIcon from '../../assets/sendIcon.svg'
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function ButtonSendMessage(props) {


    const handleSendMessage = () => {
        console.log(props.message)
        axios.post('http://localhost:3001/sendMessage', {
            textValue: props.message
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error)
        })

        window.location.reload()
    }


    return(
        <Button type="submit" onClick={handleSendMessage}>
            <Image alt="enviar" height={30} width={30} src={sendIcon}></Image>
        </Button>
    );
}