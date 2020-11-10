import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
    const style = {
        footer: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: '10px'
        },
        copyright: {
            margin: '0 10px',
            textAlign: 'center',
            fontSize: '0.9rem'
        }
    }

    return (
        <footer className="bg-dark text-white mt-auto">
            <Container style={style.footer}>
                {[`© 2020 route2tutors.online`, `All rights reserved.`].map(
                    (item, key) => (
                        <p
                            style={style.copyright}
                            // className="text-muted"
                            key={key}
                        >
                            {item}
                        </p>
                    )
                )}
            </Container>
        </footer>
    )
}
