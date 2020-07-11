import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton, List } from './styles';
import api from '../../services/api';
import User from '../../services/requests';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            repositories: [],
            loading: false,
        }
    }

    handleInputChange = event => {
        this.setState({ username: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true });
        const { username } = this.state;
        const response = await api.get(`users/${username}/repos`);
        this.setState({ repositories: response.data, loading: false })
    }

    handleSave = async event => {
        console.log('params', event);
        this.setState({ loading: true });

        const full_name = event;
        const response = await User.create(full_name);
        console.log('front-end', response);

        if (response.full_name === full_name) {
            alert('Adicionado com sucesso!');
            window.location.href = `/`;
        }
        else {
            alert('Ops... ocorreu um erro no servidor!')
        }
        this.setState({ loading: false });
    }


    render() {

        const { username, repositories, loading } = this.state;
        return (
            <>
                <h1 style={{ color: '#fff', textAlign: 'center' }}>
                    Olá, bem-vindo(a) {this.state.username}
                </h1>

                <Container>
                    <h1>
                        <FaGithubAlt />
                        Adicionando repositórios...
                    </h1>

                    <Form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="informe seu username"
                            value={username}
                            onChange={this.handleInputChange}
                        />
                        <SubmitButton loading={loading}>
                            {loading ? <FaSpinner color="#fff" size={14} /> : <FaPlus color="#fff" size={14} />}
                        </SubmitButton>
                    </Form>
                    <List>
                        {repositories.map(repository => (
                            <li key={repository.full_name}>
                                <span>{repository.full_name}</span>
                                <button onClick={() => this.handleSave(repository.full_name)}>Salvar</button>
                            </li>
                        ))}

                    </List>
                </Container>
            </>
        );
    }
}

export default Main;