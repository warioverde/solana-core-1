import { Button, Container, Heading, VStack, Text, HStack, Image } from '@chakra-ui/react'
import {FC} from 'react'

const Connected: FC = () => {
    return(
        <VStack spacing={20}>
            <Container>
                <VStack spacing={8}>
                    <Heading color="white" as='h1' size='2xl' noOfLines={1} textAlign='center'>
                        Welcome Buildoor.
                    </Heading>

                    <Text color='bodyText' fontSize="xl" textAlign='center'>
                        Each buildoor is randomly generated and can be staked to receive
                        <Text as='b'> $BLD</Text>.Use Your <Text as='b'> $BLD</Text> to upgrade your buildoor and receive perk within community  
                    </Text>
                </VStack>
            </Container>
            <HStack spacing={10}>
                <Image src="avatar1.png" alt="" />
                <Image src="avatar2.png" alt="" />
                <Image src="avatar3.png" alt="" />
                <Image src="avatar4.png" alt="" />
                <Image src="avatar5.png" alt="" />
            </HStack>

            <Button bgColor="accent" color="white" maxWidth='380'>
                <Text>mint buildoor</Text>
            </Button>
        </VStack>
    )
}

export default Connected