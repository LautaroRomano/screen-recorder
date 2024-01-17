import React from 'react';
import { Box, Flex, Spacer, Link, Text, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { FaVideo, FaInfoCircle } from 'react-icons/fa';
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

function Landing(props) {
    return (
        <Box p={4}>
            <Flex align="center" px={['50px', '40px', '20px', '10px']}>
                <Link href='/'>
                    <Flex cursor={'pointer'}>
                        <FaVideo size={24} />
                        <Text ms={'10px'} fontWeight={'bold'}>Screen Recorder</Text>
                    </Flex>
                </Link>

                <Spacer />
                <Link mr={4} href='#grabar'>Grabar</Link>
                <Link mr={4} href='#como-funciona'>Cómo Funciona</Link>
                <Link mr={4} href='#preguntas'>Preguntas Frecuentes</Link>
                <Box>
                    <FaInfoCircle size={24} />
                </Box>
            </Flex>

            <Box mt={8} id='grabar' my={'50px'}>
                {props.children}
            </Box>

            <Box mt={8} id='como-funciona'>
                <Heading my={'50px'}>Sobre el servicio</Heading>
                <Flex justify={'space-evenly'}>
                    <Flex maxW={'250px'} gap={3} fontWeight={'bold'}>
                        <Text fontSize={'x-large'}>
                            <MdOutlineScreenshotMonitor />
                        </Text>
                        <Text>Grabador de pantalla online en español y gratuito. No necesita descargar programa para grabar pantalla.</Text>
                    </Flex>
                    <Flex maxW={'250px'} gap={3} fontWeight={'bold'}>
                        <Text fontSize={'x-large'}>
                            <IoKeyOutline />
                        </Text>
                        <Text>Alta privacidad del proceso de grabación.</Text>
                    </Flex>
                    <Flex maxW={'250px'} gap={3} fontWeight={'bold'}>
                        <Text fontSize={'x-large'}>
                            <MdSaveAlt />
                        </Text>
                        <Text>Guardar el víeo rápidamente en HD.</Text>
                    </Flex>
                    <Flex maxW={'250px'} gap={3} fontWeight={'bold'}>
                        <Text fontSize={'x-large'}>
                            <FaRegHeart />
                        </Text>
                        <Text>Gratis. En línea. Suyo.</Text>
                    </Flex>
                </Flex>
            </Box>

            

            <Flex w={'100%'} align={'center'} justify={'center'} flexDir={'column'} id='preguntas'>
               
            </Flex>

            <Flex mt={'50px'}>
                FOOTER
            </Flex>

        </Box>
    );
}

export default Landing;
