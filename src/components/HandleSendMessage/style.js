import { styled } from "@stitches/react";


export const Button = styled('button', {
    margin: '0.5em 0.8em',

    height: '3.5em',
    width: '4em',

    outline: '0',
    border: '0',

    borderRadius: '0.5em',

    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
        cursor: 'pointer'
    }
})