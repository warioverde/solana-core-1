import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Box, Center, Spacer, Stack} from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import Disconnected from '../components/Disconnected'
import Connected from '../components/Connected'
import { useWallet } from '@solana/wallet-adapter-react'

const Home: NextPage = () => {

  const {connected} = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <Box w='full' h='calc(100vh)' bgImage={connected ? "" : "url(/home-background.svg)"} backgroundPosition="center">
        <Stack w='full' h='calc(100vh)' justify='center'> {/* aqui va todo lo vertical, navbar, teto y footer */} 
          {/*navbar*/}
          <NavBar/>
          <Spacer/>
          <Center>
            {/* si se conecta, se mete a la segunda vista, sino, se queda en la primera*/}
            {connected ? <Connected/>: <Disconnected/>}
          </Center>
          <Spacer/>
          <Center>
            <Box marginBottom={4} color='white'>
              <a href='https://twitter.com/_buildspace' target="_blank" rel="no opener no refer">
                build with @buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home
