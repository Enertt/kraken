import axios from "axios";
import {API_URL, token} from "./app.constants.js";

export const $axios = axios.create({
    baseURL: API_URL
})

export async function post_send_message(id, message) {
    return $axios.post(`/send_message/${id}`, {
        token,
        message
    })
}

export async function get_ticket(id) {
    return $axios.post(`/get_ticket/${id}`, {
        token
    })
}

export async function post_create_ticket(subject, message) {
    return $axios.post('/create_ticket', {
        token,
        subject,
        message
    })
}

export async function get_token(username, password, captcha) {
    return $axios.post('/token', {
        username,
        password,
        captcha
    })
}

export async function get_captcha() {
    return $axios.get('/get_captcha')
}

export async function postRecoveryFromEmail(username, email) {
    return $axios.post('/recovery_from_email', {
        username,
        email
    })
}

export async function postCheckRecoveryFromEmail(code) {
    return $axios.post('/check_recovery_from_email', {
        code
    })
}

export async function postCheckRecoveryFromEmail2(code, password) {
    return $axios.post('/check_recovery_from_email2', {
        code,
        password
    })
}

export async function post_register(username, password, email) {
    return $axios.post('/register', {
        username,
        password,
        email
    })
}
