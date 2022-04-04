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
             * Return response body and status code
             */
            core.setOutput("response-body", response.data);
            core.setOutput("response-code", response.status);
        })
        .catch(error => {
            core.setFailed(error.message);
        });
} catch (error) {
    core.setFailed(error.message);
}