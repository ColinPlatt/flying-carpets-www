import { Container, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { BalanceBox } from '../info/BalanceBox'
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
            columns={[1, null, 2]}
            alignItems="center"
            justifyContent="space-between"
            px="8"
          >
            <Flex py={[4, null, null, 0]}>
                An experimental crypto art project.
          </Flex>
            <Flex
              order={[-1, null, null, 2]}
              alignItems={'center'}
              justifyContent={['flex-start', null, null, 'flex-end']}
            >
            <SimpleGrid columns={[1,2]}
                        alignItems="center"
                        justifyContent="space-between"
                        py="2"
              >
              <Flex px="2">
                <BalanceBox />
              </Flex>
              <Flex px="2">
                <ConnectButton 
                  label='Get Rugged'
                  accountStatus='address'
                  chainStatus='none'
                />
              </Flex>
            </SimpleGrid>
            </Flex>
          </SimpleGrid>
        </Container>
      </header>
      <main>
        <Container maxWidth="container.xl">{children}</Container>
      </main>
      <footer>
        <Container mt="8" maxWidth="container.xl">
          <Text mb="4">
           Made in 🤝 with {' '}
            <Link href="https://www.rugreserach.wtf">rug research</Link>
          </Text>
        </Container>
      </footer>
    </>
  )
}