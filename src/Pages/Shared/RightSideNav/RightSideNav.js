import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaYoutube,FaTwitter,FaWhatsapp,FaDiscord } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup className='mb-4' vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>

            <div>
                <h3>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>  FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube> YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDiscord></FaDiscord> DisCord</ListGroup.Item>
                    
                </ListGroup>
                <div>
                    <BrandCarosel></BrandCarosel>
                </div>


            </div>




        </div>
    );
};

export default RightSideNav;