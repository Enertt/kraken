import axios from "axios";
import {admin_token, API_URL} from "./app.constants.js";

export const $admin = axios.create({
    baseURL: API_URL
})

$admin.interceptors.response.use(
    response => {
        if (response.status === 401) {
            console.log('Error', response.status)
            localStorage.clear()
            window.location.reload()
        }
        return response
    },
    error => {
        if (error.response.status === 401) {
            console.log('Error', error.response.status)
            localStorage.clear()
            window.location.reload()
        }
        return Promise.reject(error)
    }
)


export async function post_admin_join(admin_token2) {
    return $admin.post('/admin/join', {
        admin_token: admin_token2 || admin_token
    })
}

export async function post_edit_prices(ssn_full, ssn_last, ssn_reverse, bg, dl, dob) {
    return $admin.post('/admin/edit_prices', {
        admin_token,
        ssn_full,
        ssn_last,
        ssn_reverse,
        bg,
        dl,
        dob
    })
}

export async function post_user_list(num) {
    return $admin.post('/admin/get_user_list', {
        admin_token,
        num
    })
}

export async function post_current_user(username) {
    return $admin.post('/admin/get_current_user', {
        admin_token,
        username
    })
}

export async function post_admin_stat(start, end) {
    return $admin.post(
        `/admin/stat?start=${start}&end=${end}`,
        {
            admin_token,
            start,
            end
        },
        {cache: false}
    )
}

export async function post_ban_user(username, status) {
    return $admin.post('/admin/ban_user', {
        admin_token,
        username,
        status
    })
}

export async function post_update_balance(username, summ) {
    return $admin.post('/admin/update_balance', {
        admin_token,
        username,
        summ
    })
}

export async function post_admin_send_message(id, message) {
    return $admin.post(`/admin/send_message/${id}`, {
        token: admin_token,
        message
    })
}

export async function post_admin_list_tickets() {
    return $admin.post(`/admin/list_tickets`, {
        token: admin_token
    })
}


export async function post_admin_read_news() {
    return $admin.post(`/admin/read_news`, {
        admin_token,
    })
}

export async function post_admin_add_news(id_news, username, news_header, news, data) {
    return $admin.post(`/admin/add_news`, {
        admin_token,
        username, news_header, news, data, id_news
    })
}

export async function post_admin_del_news(id_news) {
    return $admin.post(`/admin/del_news`, {
        admin_token,
        id_news
    })
}
