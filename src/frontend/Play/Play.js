import React , { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../Common/Loading/Loading';
import PlayContent from './PlayContent';

import './Play.css';

class Play extends Component {
    constructor() {
        super();
        this.state = {
            show: {}
        }
    }

    componentDidMount() {
        let showId = this.props.match.params.showId;
        fetch(`/rest/shows/${showId}`)
        .then(res => res.json())
        .then(show => this.setState({ show }));
    }

    render() {
        let show = this.state.show;
        if (show) {
            return show.id ?
                <PlayContent show={show} /> :
                <Loading />
        } else {
            return <Redirect to='/NotFound' />
        }
    }
}
export default Play;