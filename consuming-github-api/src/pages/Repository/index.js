import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { Container } from './styles';
function Main() {
    return (
        <>
            <h1 style={{ color: '#fff', textAlign: 'center' }}>
                Aqui está listando repos salvos no banco de dados
            </h1>
            <Container>
                <h1>
                    <FaGithubAlt />
                    Listando repositórios...
                </h1>
            </Container>
        </>
    );
}

export default Main;