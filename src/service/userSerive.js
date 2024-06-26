import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8090/api/v1/lich";

function UserService() {
    return {
        getUsers() {
            return axios.get(USER_API_BASE_URL+'/');
        },
        // http://localhost:8090/api/v1/lich/them
        createUser(user) {
            return axios.post(USER_API_BASE_URL+'/them', user);
        },

        // getUserById(userId) {
        //     return axios.get(`${USER_API_BASE_URL}/${userId}`);
        // },

        // updateUser(user, userId) {
        //     return axios.put(`${USER_API_BASE_URL}/${userId}`, user);
        // },

        deleteUser(id) {
            return axios.delete(`${USER_API_BASE_URL}/xoa/${id}`);
        },
    };
}

export default UserService();
