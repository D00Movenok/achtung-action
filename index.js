import axios from 'axios';
const core = require('@actions/core');

try {
    /**
     * Webhook url
     * @type {string}
     */
    const webhook = core.getInput('webhook');
    if (!webhook) {
        throw new Error('`webhook` param is missing');
    }

    /**
     * Achtung token
     * @type {string}
     */
    const token = core.getInput('token');
    if (!token) {
        throw new Error('`token` param is missing');
    }

    /**
     * Message to send
     * @type {string}
     */
    const message = core.getInput('message');
    if (!message) {
        throw new Error('`message` param is missing');
    }

    /**
     * Send message request
     */
    axios({
        method: 'POST',
        url: webhook.concat('/api/notify'),
        data: {
            'message': message,
            'access_token': token,
        },
    })
        .then(response => {
            /**
             * Check response for errors
             */
            if (response.data.status === 'error') {
                core.setFailed(response.data.error);
            }

            console.log(response.data);
        })
        .catch(error => {
            core.setFailed(error.message);
        });
} catch (error) {
    core.setFailed(error.message);
}