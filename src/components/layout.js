import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
    const style = {
        layout: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        container: { marginTop: '76px' }
    }
    return (
        <div style={style.layout}>
            <div>
                <Header />
                <Container style={style.container}>{children}</Container>
            </div>
            <Footer />
        </div>
    )
}
