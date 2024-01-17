import React, { useRef, useState } from 'react';
import '../App.css'
import { Flex, Text, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Image, Link, Box } from '@chakra-ui/react';
import { BsRecordCircle } from "react-icons/bs";
import RecordRTC from 'recordrtc';
import { FaPause } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { RxResume } from "react-icons/rx";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

export default function Landing(props) {

    const mediaRecorderRef = useRef(null);
    const recordedVideoRef = useRef(null);
    const [isRecording, setIsRecording] = useState(false);
    const [isPause, setIsPause] = useState(false);
    const [view, setView] = useState(false);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });

        mediaRecorderRef.current = RecordRTC(stream, { type: 'video' });
        mediaRecorderRef.current.startRecording();

        setIsRecording(true);
    };

    const pauseRecording = () => {
        mediaRecorderRef.current.pauseRecording();
        setIsPause(true)
    };

    const resumeRecording = () => {
        mediaRecorderRef.current.resumeRecording();
        setIsPause(false)
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stopRecording((videoURL) => {
            recordedVideoRef.current.src = videoURL;
            setIsRecording(false);
        });
        setView(true)
    };

    const onDownload = () => {
        if (recordedVideoRef.current) {
            const videoBlob = mediaRecorderRef.current.getBlob();
            const videoUrl = URL.createObjectURL(videoBlob);

            const a = document.createElement('a');
            a.href = videoUrl;
            a.download = 'grabacion_screen_rec.mp4'; // Puedes cambiar el nombre del archivo según tus preferencias
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    return (
        <Flex w={'100vw'} h={'100vh'} bg={'#4352E3'} id='home'>
            <div className="landing-page">
                <header>
                    <div className="container">
                        <a href="#home" className="logo">SCREEN <b>REC</b></a>
                        <ul className="links">
                            <li><Link href='#home'>Inicio</Link></li>
                            <li><Link href='#about-us'>Sobre nosotros</Link></li>
                            <li><Link href='#frequent-questions'>Preguntas frecuentes</Link></li>
                            <li><button onClick={startRecording}>GRABAR</button></li>
                        </ul>
                    </div>
                </header>
                <Flex h={'calc(100% - 80px)'} >
                    <Flex h={'100%'} justify={'center'} align={'center'}>
                        <Flex flexDir={'column'} w={'50%'} px={'100px'} gap={'50px'} color={'#fff'}>
                            <Heading>Graba tu pantalla gratis</Heading>
                            <Text fontSize={'15px'}>
                                Con nuestra aplicacion puedes grabar la pantalla de tu computadora sin descargar nada, y GRATIS! <br />
                                Para comenzar solo presiona el boton de GRABAR y nosotros haremos la magia✨.
                            </Text>
                            {!isRecording ?
                                <Flex w={'100%'} gap={3}>
                                    <Button bg={'#6C63FF'} color={'#fff'} _hover={{ bg: '#6C6399' }} onClick={startRecording} w={'100%'}>
                                        <Text me={2}>
                                            <BsRecordCircle />
                                        </Text>
                                        GRABAR
                                    </Button>
                                    {
                                        view &&
                                        <Button bg={'#453AFF'} color={'#fff'} _hover={{ opacity: .8 }} onClick={onDownload} w={'100%'}>
                                            <Text me={2}>
                                                <FaArrowAltCircleDown />
                                            </Text>
                                            Descargar
                                        </Button>
                                    }
                                </Flex>

                                :
                                <Flex w={'100%'} gap={3}>
                                    {
                                        !isPause ?
                                            <Button bg={'#19228B'} color={'#fff'} _hover={{ opacity: .8 }} onClick={pauseRecording} w={'100%'}>
                                                <Text me={2}>
                                                    <FaPause />
                                                </Text>
                                                PAUSAR
                                            </Button>
                                            :
                                            <Button bg={'#19228B'} color={'#fff'} _hover={{ opacity: .8 }} onClick={resumeRecording} w={'100%'}>
                                                <Text me={2}>
                                                    <RxResume />
                                                </Text>
                                                REANUDAR
                                            </Button>
                                    }
                                    <Button bg={'#C0259A'} color={'#fff'} _hover={{ opacity: .8 }} onClick={stopRecording} w={'100%'}>
                                        <Text me={2}>
                                            <FaStop />
                                        </Text>
                                        DETENER GRABACION
                                    </Button>
                                </Flex>
                            }
                        </Flex>
                        <Flex w={'45%'} px={5}>
                            {
                                view ?
                                    <video ref={recordedVideoRef} controls />
                                    :
                                    <Image src="/img.jpg" />
                            }
                        </Flex>
                    </Flex>
                </Flex>

                <Flex h={'100%'} w={'100%'} bg={'#453AFF'} id='about-us'>
                    <Flex h={'100%'} justify={'center'} align={'center'}>
                        <Flex w={'35%'} px={5}>
                            <Flex w={'100%'} align={'center'} justify={'center'}>
                                <Box mt={8} bg={'#131B6C'} fontWeight={'bold'} w={['95%', '80%', '65%', '80%']} p={8} borderRadius={10} color={'#fff'}>
                                    <Text>
                                        El mas simple programa gratuito para grabar la pantalla de tu PC 🖥️ <br /> es una de las herramientas más excepcionales para capturar momentos con solo un par de clics. No se requiere la molestia de instalar software adicional. ¡Haz uso de nuestra encantadora grabadora de vídeo en línea 🎥 cuantas veces desees, y lo mejor de todo, sin que te cueste nada! 💸✨
                                    </Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex flexDir={'column'} w={'60%'} px={'100px'} gap={'50px'} color={'#fff'}>
                            <Heading>Sobre el servicio</Heading>
                            <Flex justify={'space-evenly'} flexWrap={'wrap'} gap={'50px'}>
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
                        </Flex>

                    </Flex>


                </Flex>
                <Flex h={'100%'} w={'100%'} bg={'#19228B'} id='frequent-questions'>
                    <Flex h={'100%'} justify={'center'} align={'center'}>
                        <Flex flexDir={'column'} w={'60%'} px={'100px'} gap={'50px'} color={'#fff'}>
                            <Heading>Preguntas frecuentes</Heading>
                            <Accordion defaultIndex={[0]} allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                ¿Es segura la grabación de pantalla en línea?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} >
                                        Sí, es absolutamente segura, tanto para su navegador como para su ordenador portátil. Todas las grabaciones son exclusivamente para su uso, nadie puede robarlas.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem w={'100%'}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                ¿Cómo puedo capturar vídeo online de forma gratuita?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        1. Habilite el programa capturar pantalla vídeo en línea. <br />

                                        2.Elija su la pantalla o pestana que desee capturar.<br />

                                        3.Empiece a grabar su pantalla.<br />

                                        4.Visualice el video  grabado.<br />

                                        5.Guarde la grabación en su equipo.<br />
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                ¿Cómo puedo grabar mi pantalla con audio?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Para incluir su voz, habilite la marca del icono de Micrófono antes de empezar a grabar. Si necesita capturar los sonidos internos del sistema, habilite el icono de Sonido.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Flex>
                        <Flex w={'35%'} px={5}>
                            <Link href='https://www.instagram.com/dev.soul.it' target='_blank'>
                                <Image src="/desarrollado por.jpg" />
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </Flex>
    )
}