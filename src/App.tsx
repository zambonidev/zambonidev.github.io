import React from 'react';
import { Box, Button, ChakraProvider, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react';

function App() {
  return (
    <ChakraProvider>

      <Box w='100vw'
        height='100vh'
        fontFamily='Roboto'
        color='white'
        overflow='auto'

        backgroundPosition={{ xl: 'right 500px', base: 'right 600px' }}
        backgroundImage="url('/bg.png')"
        backgroundSize='cover'
        backgroundRepeat="no-repeat"
        backgroundAttachment='local'

      >
        <Box textAlign='center' p='20px' w='100%' h='100%'>
          <Image src='./zamboni.png' h='60px' />
          <br />
          <Text color='#006600' fontSize={{ lg: '6xl', base: '4xl' }} fontWeight='bold'>Você está <Text as="span" bg='#ff8080'>procurando</Text> por um fornecedor de <Text as="span" bg='#ff8080'>morangos?</Text> <br /> Temos as <Text as="span" bg='#ff8080'>melhores ofertas</Text> para você!</Text>
          <Text color='#333333' fontSize={{ lg: '2xl', base: 'xl' }}>Apoie a agricultura familiar, há mais de 14 anos trabalhando com frutas selecionadas nos Campos de Cima da Serra no Rio Grande do Sul!</Text>
          <br />
          <br />
          <Box w={{ lg: '50%', base: '80%' }} margin='auto' h={{ lg: '40%', base: '50%' }} display='block'>
            <SimpleGrid columns={{ lg: 2, base: 1 }} row={{ lg: 1, base: 2 }} spacing={5} w='100%' h='100%' >
              <Box borderRadius='10px' display='block' backgroundImage="url('/in-natura.jpg')" backgroundSize='cover' position='relative'>
                <Text textDecorationColor='#006600' position='relative' float='left' top='50%' left='50%' transform='translate(-50%,-50%)' color='white' fontSize='30pt'>In Natura</Text>
              </Box>
              <Box borderRadius='10px' display='block' backgroundImage="url('/congelado.jpg')" backgroundSize='cover' position='relative'>
                <Text textDecorationColor='#006600' position='relative' float='left' top='50%' left='50%' transform='translate(-50%,-50%)' color='white' fontSize='30pt' >Congelado</Text>
              </Box>
            </SimpleGrid>
          </Box>

          <br />
          <Text fontSize='3xl'>Entre em contato agora mesmo pelo WhatsApp</Text>
          <br />
          <a href="https://wa.me/5554991462283" target="_blank">
            <Button bg='#006600' _hover={{ backgroundColor: '#003300' }} color='white' size='lg'><IconBrandWhatsapp style={{ margin: 'auto', verticalAlign: 'middle', display: 'inline-block', marginRight: '10px' }} /> Entrar em Contato</Button>
          </a>
          <br />
          <br />
          <a href="https://www.instagram.com/zambonimorangos/" target="_blank">
            <Text fontSize={{ lg: '2xl', base: 'xl' }}>
              <IconBrandInstagram size='30px' style={{ backgroundColor: '#006600', color: 'white', borderRadius: '5px', margin: 'auto', verticalAlign: 'middle', display: 'inline-block', marginRight: '10px' }} />
              Conheça nossos produtos
            </Text>
          </a>
          <br />
          <br />
          <Text fontSize={{ lg: 'md', base: 'md' }}>Frete sob consulta para Santa Catarina e Rio Grande do Sul, demais estados apenas retirada no local Vacaria, Rio Grande do Sul*</Text>
        </Box>

      </Box>

    </ChakraProvider>
  );
}

export default App;
