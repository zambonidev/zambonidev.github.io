import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, ChakraProvider, Grid, GridItem, Icon, IconButton, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { IconBrandWhatsapp } from '@tabler/icons-react';

function App() {
  return (
    <ChakraProvider>
      <Box w='100vw'
        height='100vh'
        fontFamily='Roboto'
      >
        <Box
          position='absolute'
          zIndex='1'
          w='100%'
          height='100%'


        // backgroundImage="url('/bg.jpg')"
        // backgroundSize='cover'
        // backgroundRepeat="no-repeat"
        />
        <Box textAlign='center' position='absolute' zIndex='2' w='100%' h='100%'>
          <Text color='#F90628' fontSize={{ lg: '6xl', base: '5xl' }} fontWeight='bold'>Você está <Text as="span" bg='#06F9D7'>procurando</Text> por um fornecedor de <Text as="span" bg='#06F9D7'>Morangos?</Text> <br /> Temos as <Text as="span" bg='#06F9D7'>melhores ofertas</Text> para você!</Text>

          <Text fontSize='2xl'>Apoie a agricultura familiar com frutas selecionadas dos Campos de Cima da Serra no Rio Grande do Sul!</Text>
          <br />
          <Box w='100%' display='flex' alignItems='center' justifyContent='center'>
            <Image src='./morango.png' ml='10px' h='40px' />
            <Image src='./morango.png' ml='10px' h='40px' />
            <Image src='./morango.png' ml='10px' h='40px' />
          </Box>
          <br />
          <Box w={{ lg: '50%', base: '80%' }} margin='auto' h={{ lg: '40%', base: '50%' }} display='block'>
            <SimpleGrid columns={{ lg: 2, base: 1 }} row={{ lg: 1, base: 2 }} spacing={1} w='100%' h='100%' >
              <Box display='block' backgroundImage="url('/in-natura.jpg')" backgroundSize='cover' position='relative'>
                <Text as='u' textDecorationColor='#06F9D7' position='relative' float='left' top='50%' left='50%' transform='translate(-50%,-50%)' color='white' fontSize='30pt'>In Natura</Text>
              </Box>
              <Box display='block' backgroundImage="url('/congelado.jpg')" backgroundSize='cover' position='relative'>
                <Text as='u' textDecorationColor='#06F9D7' position='relative' float='left' top='50%' left='50%' transform='translate(-50%,-50%)' color='white' fontSize='30pt' >Congelado</Text>
              </Box>
            </SimpleGrid>
          </Box>

          <br />
          <Text fontSize='3xl'>Entre em contato agora mesmo pelo WhatsApp:</Text>
          <br />
          <a href="https://wa.me/5554991462283" target="_blank">
          <Button colorScheme='whatsapp' size='lg'><Image src='./whats.png' h='30px' verticalAlign='middle' display='inline-block' mr='10px' /> Entrar em Contato</Button>
          </a>
          <br />
          <br />
          <a href="https://www.instagram.com/granjazamboni/">
          <Text fontSize='3xl' as='u'>
          <Image margin='auto' src='./instagram.png' h='50px' verticalAlign='middle' display='inline-block' mr='10px' />
          Conheça nossos produtos
          </Text>
          </a>
          <br />
          <br />
          <Text fontSize='xl'>Frete sob consulta para Santa Catarina e Rio Grande do Sul, demais estados apenas retirada no local Vacaria, Rio Grande do Sul*</Text>
          <br />
          <Image margin='auto' src='./zamboni.png' h='50px' />
        </Box>

      </Box>

    </ChakraProvider>
  );
}

export default App;
