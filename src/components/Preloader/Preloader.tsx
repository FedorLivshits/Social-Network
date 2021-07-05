import React from 'react'
import {Spinner} from 'react-bootstrap';

const Preloader: React.FC = () => (
    <Spinner animation="grow" variant="dark" className="spinner-preloader" />
);

export default Preloader;