import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';
import { Container, List } from './styles';
import { API } from '../../services/requests/api';
export default class Repository extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repositories: [],
        }
    }

    async componentDidMount() {
        const response = await API().get(`/users`);
        this.setState({ repositories: response.data });
    }

    render() {
        const { repositories } = this.state;
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
                    <List>
                        {repositories.map(repository => (
                            <li key={repository.full_name}>
                                <span>{repository.full_name}</span>
                                <Link to={`/details/${encodeURIComponent(repository.id)}`}>Detalhes</Link>
                            </li>
                        ))}
                    </List>
                </Container>
            </>
        );
    }
}
