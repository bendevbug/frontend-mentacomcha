import { styled } from "@stitches/react";


export const Container = styled('main',{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    width: '100w',
    height: '100vh',

    background: '#f5c7c4',
    color: '#fff',
    
    h1: {
        color: '#222',

        textShadow: '1px 2px 2px'
    },

    button: {
        background: 'transparent',

        border: '2px solid #111',
        borderRadius: '0.5em',

        width: '30%',
        height: '4vh',

        margin: '1.5em 10%',

        '&:hover': {
            cursor: 'pointer',
            background: '#000',
            color: '#fff',

            transition: 'all 0.2s'
        }
    },

})

