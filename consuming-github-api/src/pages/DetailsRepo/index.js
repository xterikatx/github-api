import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';
import { Container, List } from './styles';
import { API } from '../../services/requests/api';

export default class DetailsRepo extends Component {
    state = { full_name: '', contributors: [], pulls: [] }

    async componentDidMount() {
        const { match } = this.props;
        const id = match.params.repository;
        const response = await API().get(`/user/${id}`);
        this.setState({
            full_name: response.data.full_name,
            contributors: response.data.contributors,
            pulls: response.data.pulls
        })
        console.log(this.state.full_name);
        console.log('contr', this.state.contributors)
        console.log('pulls', this.state.pulls)
    }
    render() {
        const { full_name, contributors, pulls } = this.state;
        return (
            <>
                <h1 style={{ color: '#fff', textAlign: 'center' }}>
                    Informações adicionais
                </h1>
                <Container>
                    <h1>
                        <FaGithubAlt />
                        Detalhes do repositórios: {this.state.full_name}
                    </h1>
                    <List>
                        {pulls.map(repository => (
                            <>
                                <h3>Contribuidores</h3>

                                <li key={repository.title}>
                                    <span>{repository.title}</span>
                                    {/* <Link to="/localhost">Detalhes</Link> */}
                                </li>
                            </>
                        ))}
                    </List>
                </Container>
            </>
        )
    }
}