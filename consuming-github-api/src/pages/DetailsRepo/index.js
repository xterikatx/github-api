import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';
import { Container, List, Loading, Owner } from './styles';
import { API } from '../../services/requests/api';

export default class DetailsRepo extends Component {
    state = { 
        full_name: '', 
        contributors: [], 
        pulls: [], 
        profile: '',
        loading: true
    }

    async componentDidMount() {
        const { match } = this.props;
        const id = match.params.repository;
        const response = await API().get(`/user/${id}`);

        this.setState({
            full_name: response.data.full_name,
            contributors: response.data.contributors,
            pulls: response.data.pulls,
            profile: response.data.contributors[0].avatar_url,
            loading: false,
        })

        console.log(this.state.full_name);
        console.log('contr', this.state.contributors)
        console.log('pulls', this.state.pulls)
    }
    render() {
        const { full_name, contributors, pulls, loading, profile } = this.state;
        // if(loading){
        //     return <Loading>Carregando</Loading>
        //  }

        // {pulls.slice(0,3).map(repository => (
        //     <>
        //         <h3>Contribuidores</h3>

        //         <li key={repository.title}>
        //             <span>{repository.title}</span>
        //             {/* <Link to="/localhost">Detalhes</Link> */}
        //         </li>
        //     </>
        // ))}

        return (
            <>
                <h1 style={{ color: '#fff', textAlign: 'center' }}>
                    Informações adicionais
                </h1>
                <Container>
                    <h1>
                        <FaGithubAlt />
                        Detalhes do repositórios
                    </h1>

                <Owner>
                    <img src={profile} alt="profile" />
                    <h3>{this.state.full_name}</h3>

                </Owner>


                    {/* <List>
                        {loading ? <Loading>Carregando...</Loading> : null}

                    </List> */}
                </Container>
            </>
        )
    }
}