import {cleanJSON} from "../utils/common";

const headers = {
    'Content-Type': 'application/json',
    Accept: '*/*',
};

const serverEndpoint = 'https://vecindario-network.herokuapp.com/api'

export const postData = async (path = '/', data) => {
    const body = cleanJSON(data);
    new Promise((resolve, reject) => {
        fetch(`${serverEndpoint}${path}`, {
            headers,
            method: 'POST',
            body: JSON.stringify(body),
        })
            .then(response => {
                const {status} = response;
                response.json().then(data => {
                    if (status === 200) {
                        resolve(data);
                    }
                    if (status >= 400 && status <= 599) {
                        reject(data);
                    }
                });
            })
            .catch(e => reject(e));
    });
};

export const deleteData = async (path = '/', data) => {
    const body = cleanJSON(data);
    new Promise((resolve, reject) => {
        fetch(`${serverEndpoint}${path}`, {
            headers,
            method: 'DELETE',
            body: JSON.stringify(body),
        })
            .then(response => {
                const {status} = response;
                response.json().then(data => {
                    if (status === 200) {
                        resolve(data);
                    }
                    if (status >= 400 && status <= 599) {
                        reject(data);
                    }
                });
            })
            .catch(e => reject(e));
    });
};

export const getData = async (path = '') =>
    new Promise((resolve, reject) => {
        fetch(`${serverEndpoint}${path}`).then(response => {
            const {status} = response;
            response.json().then(data => {
                if (status >= 400 && status <= 599) {
                    reject(data.error);
                } else {
                    resolve(data);
                }
            });
        });
    });