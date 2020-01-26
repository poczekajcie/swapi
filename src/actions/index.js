import axios from 'axios';

export const fetchPeople = () =>
    async dispatch => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://swapi.co/api/people";
        const response = await axios.get(proxyurl + url, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        });

        dispatch({type: 'FETCH_PEOPLE', payload: response.data.results})
    };

export const fetchPeopleByPage = page =>
    async dispatch => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://swapi.co/api/people/?page=" + page;
        const response = await axios.get(proxyurl + url, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        });

        dispatch({type: 'FETCH_PEOPLE', payload: response.data})
    };

export const fetchPerson = id => async dispatch => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://swapi.co/api/people/" + id;
    const response = await axios.get(proxyurl + url, {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    });

    dispatch({ type: 'FETCH_PERSON', payload: response.data });
};