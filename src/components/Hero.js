import React from 'react'
import { Col, Row } from 'react-bootstrap'
import lapBoy from '../images/lapBoy.svg'

export default function Hero() {
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: 'lightblue',
                height: '150vh'
            }}
        >
            <Row>
                <Col xs={12} lg>
                    <h1>Route 2 Online Tutors</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit commodi assumenda iusto rerum ipsum ea quaerat
                        fugiat ducimus, natus magni porro, doloremque molestiae
                        facilis impedit quibusdam excepturi unde dignissimos
                        molestias? Sunt, aliquam? Officia, repudiandae beatae
                        voluptatum deserunt voluptates aliquam, adipisci
                        voluptatibus quibusdam alias modi quas quia veritatis
                        minus in expedita.
                    </p>
                </Col>
                <Col>
                    <img
                        src={lapBoy}
                        alt="Route two online tutors"
                        style={{
                            objectFit: 'cover',
                            width: '100%'
                        }}
                    />
                </Col>
            </Row>

            <Row></Row>
        </div>
    )
}
