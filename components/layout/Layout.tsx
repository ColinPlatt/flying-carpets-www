import { Container, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import NextLink from 'next/link'
import React from 'react'
//import { Head, MetaProps } from './Head'

interface LayoutProps {
  children: React.ReactNode
  //customMeta?: MetaProps
}

//<Head customMeta={customMeta} />

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      
      <header>
        <Container maxWidth="container.xl">
          <SimpleGrid
            columns={[1, 1, 1, 2]}
            alignItems="center"
            justifyContent="space-between"
            py="8"
            px="8"
          >
            <Flex py={[4, null, null, 0]}>
            </Flex>
            <Flex
              order={[-1, null, null, 2]}
              alignItems={'center'}
              justifyContent={['flex-start', null, null, 'flex-end']}
            >
              <ConnectButton 
                label='Get Rugged'
                accountStatus='address'
                chainStatus='none'
              />
            </Flex>
          </SimpleGrid>
        </Container>
      </header>
      <main>
        <Container maxWidth="container.xl">{children}</Container>
      </main>
      <footer>
        <Container mt="8" py="8" px="8" maxWidth="container.xl">
          <Text mb="4">
           Made in 🤝 with {' '}
            <Link href="https://www.rugreserach.wtf">rug research</Link>
          </Text>
        </Container>
      </footer>
    </>
  )
}