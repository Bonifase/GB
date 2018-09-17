import axios from 'axios';

export default {
    user: {
        login: (credentials) => axios.post('https://web-game-board-api.herokuapp.com/api/auth', { credentials }).then(res => res.data.user),
        signup: user => axios.post('http://localhost:5000/api/users', { user }).then(res => res.data.user)
    }
};   