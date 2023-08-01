import Head from 'next/head'
import { Container } from '@/styles'
import { useState, useEffect } from 'react'

import Link from 'next/link';

export default function Home() {

  const [name, setName] = useState('');
  const [link, setLink] = useState('')

  const nameBen = 'ben';

  const nameSofia = 'soso'

  useEffect(() => {
    if (name === 'ben') {
      const linked = '/benPage';
      setLink(linked);
    }

    if(name === 'soso') {
      const linked = '/sosoPage';
      setLink(linked)
    }
  }, [name]);


  useEffect(() => {
    if (link) {
      window.location.href = link;
    }
  }, [link]);


  const handleChoseeName = (event) => {
      const valueName = event.target.value;
      setName(valueName);
      localStorage.setItem('nameValue', valueName);
  };


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div>
          <h1>Selecione uma opção: </h1>
          <Link href={link}>
            <button value={nameBen} onClick={handleChoseeName} name={name}>Ben</button>
          </Link>
          <Link href={link}>
            <button value={nameSofia} onClick={handleChoseeName} name={name}>Soso</button>
          </Link>
        </div>
      </Container>
    </>
  )
}