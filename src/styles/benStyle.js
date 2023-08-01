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

    textarea: {
        fontFamily: 'Poppins, sans serif',
        width: '30vw',
        height: '3.5em',

        borderRadius: '0.5rem',

        padding: '0.8rem',

        fontSize: '1em',

        border: '0',
        outline: '0',

        resize: 'none',
        overflowY: 'hidden',

        margin: '1em 0'
    },

    section: {
        backgroundColor: '#f5dedc',

        width: '40vw',
        height: '80vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',

        flexDirection: 'column',

        borderRadius: '0.75rem',
    
    }
})

export const Message = styled('div',{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    margin: '1em 0.8em',

    flexDirection: 'column',

    backgroundColor: '#fff',

    borderRadius: '0.5rem',

    width: 'auto',

    padding: '0.3em 3em',

    minHeight: '4em',
    height: 'auto',

    fontSize: '1em',

    p: {
        color: 'black',
        margin: '0.2em 0',
        textAlign: 'right',
    }
})

export const SendArea = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',


    button: {
       
    }
})