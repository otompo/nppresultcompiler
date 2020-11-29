import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import situation from '../img/situation-gh.jpeg'


const ProblemSection = () => {
    return (
            <div>
               <Image  src={situation}  fluid />

            </div>
           
    );
};

export default ProblemSection;