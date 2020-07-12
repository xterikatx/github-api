import React, { Component } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { Container, PullList, ContributorsList, Owner } from './styles';
import { API } from '../../services/requests/api';
import moment from 'moment';
export default class DetailsRepo extends Component {
    state = {
        full_name: '',
        description: '',
        contributors: [],
        pulls: [],
        withoutPulls: false,
    }

    async componentDidMount() {
        const { match } = this.props;
        const id = match.params.repository;
        const response = await API().get(`/user/${id}`);

        this.setState({
            full_name: response.data.full_name,
            description: response.data.description,
            contributors: response.data.contributors,
            pulls: response.data.pulls,
            profile: response.data.contributors[0].avatar_url,
        })


        if (this.state.pulls.length === 0) {
            this.setState({ withoutPulls: true })
        }
    }
    render() {
        const {
            full_name,
            contributors,
            pulls,
            profile,
            description,
            withoutPulls
        } = this.state;

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
                        <h3>{full_name}</h3>
                        <p>{description}</p>
                    </Owner>

                    <ContributorsList>
                        <h3>Contribuidores</h3>

                        {contributors.map(contributors => (
                            <>
                                <li key={String(contributors.id)}>
                                    <img src={contributors.avatar_url} alt="profile" />
                                    <div>
                                        <strong>
                                            <p>{contributors.login}</p>
                                        </strong>
                                        <a href={contributors.html_url}>
                                            visitar perfil
                                        </a>

                                    </div>
                                </li>
                            </>
                        ))}
                    </ContributorsList>
                    <PullList>
                        <h3>Lista dos 3 Últimos Pull Requests</h3>
                        {withoutPulls ? <li><strong>Sem solicitações de pulls pulls</strong></li> : null}
                        {pulls.slice(0, 3).map(pull => (
                            <>

                                <li key={String(pull.id)}>
                                    <img src={pull.user.avatar_url} alt="profile" />
                                    <div>
                                        <strong>
                                            <p>{pull.title}</p>
                                        </strong>
                                        <a>
                                            {moment(pull.created_at).format("MMMM Do YYYY")}
                                        </a>
                                    </div>
                                </li>
                            </>
                        ))}
                    </PullList>
                </Container>
            </>
        )
    }
}