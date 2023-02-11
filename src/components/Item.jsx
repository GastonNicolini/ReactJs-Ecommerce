import { 
  Container, 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Stack, 
  Heading, 
  Image, 
  Text, 
  Divider, 
  ButtonGroup, 
  Button,
  Flex,
  useToast
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({ id, name, description, price, stock, category, image, imageAlt}) => {
  const toast = useToast();
  const addedItemId = 'addedItemToast'

  const addedItemToast = (id, message) => {
    if (!toast.isActive(id)) {
      toast ({
        id,
        title: message,
        status: 'success',
        isClosable: true,
      })
    }
  }
  
  return (
    <Container className="item__container">
      <Card key={ id } maxW='sm'>
        <CardBody>
          <div className='item__container__image'>
            <Image src={ image } alt={ imageAlt } borderRadius='lg'/>
          </div>
          <Stack mt='6' spacing='3'>
            <Link to={`/item/${ id }`}><Heading size='md'>{ name }</Heading></Link>
            <Text>
              { description }
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ${ price.toLocaleString('es-AR') }
            </Text>
            <Text>
              Stock: { stock }
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ItemCount stock={ stock } />
          <ButtonGroup spacing='2'>
            {/* <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button> */}
            <Button variant='ghost' colorScheme='blue' onClick={() => addedItemToast(addedItemId, "The item was added to your cart 👍")}>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default Item;