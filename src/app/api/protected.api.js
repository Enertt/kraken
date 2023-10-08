import axios from "axios";
import {API_URL, token} from "./app.constants.js";

export const $axios_protected = axios.create({
    baseURL: API_URL
})

$axios_protected.interceptors.request.use(async config => {
    if (!config?.headers) {
        throw new Error(
            "Expected 'config' and 'config.headers' not to be undefined"
        )
    }

    if (localStorage.getItem('access')) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

$axios_protected.interceptors.response.use(
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

export async function get_list_tickets() {
    return $axios_protected.get('/list_tickets')
}

export async function get_prices() {
    return $axios_protected.get('/get_prices')
}

export async function post_edit_password(password) {
    return $axios_protected.post('/edit_password', {
        password
    })
}

export async function get_notification() {
    return $axios_protected.get('/notification')
}

export async function get_balance() {
    return $axios_protected.get('/get_balance')
}

export async function get_del_notification(id_n) {
    return $axios_protected.post('/del_notification', {id_n})
}

export async function get_count_notification() {
    return $axios_protected.get('/count_notification')
}

export async function patch_pop_bal(summ) {
    return $axios_protected.patch('/pop_bal', {
        summ
    })
}

export async function get_founds_history() {
    return $axios_protected.get('/founds_history')
}

//  SsnReverse-lookup start
export async function post_bg(FirstName, LastName, Address, City, State) {
    return $axios_protected.post('/find/bg', {
        FirstName,
        LastName,
        Address,
        City,
        State
    })
}

export async function get_bg(token) {
    return $axios_protected.get('/find/fetch/bg', {
        params: {
            token
        }
    })
}

export async function post_bg_history() {
    return $axios_protected.post('/find/bg_history')
}

//  SsnReverse-lookup end

//  SSN Full lookup start
export async function post_full_ssn(FirstName, LastName, Address, City, State) {
    return $axios_protected.post('/find/full_ssn', {
        FirstName,
        LastName,
        Address,
        City,
        State
    })
}

export async function get_full_ssn(token) {
    return $axios_protected.get('/find/fetch/full_ssn', {
        params: {
            token
        }
    })
}

export async function post_full_ssn_history() {
    return $axios_protected.post('/find/full_ssn_history')
}

// SSN Full lookup end

//  SSN Last 4 lookup start
export async function post_last_ssn(FirstName, LastName, Address, City, State) {
    return $axios_protected.post('/find/last_ssn', {
        FirstName,
        LastName,
        Address,
        City,
        State
    })
}

export async function get_last_ssn(token) {
    return $axios_protected.get('/find/fetch/last_ssn', {
        params: {
            token
        }
    })
}

export async function post_last_ssn_history() {
    return $axios_protected.post('/find/last_ssn_history')
}

// SSN Last 4 lookup end

//  SSN Reverse start
export async function post_reverse_ssn(ssn) {
    return $axios_protected.post('/find/reverse_ssn', {
        ssn
    })
}

export async function get_reverse_ssn(token) {
    return $axios_protected.get('/find/fetch/reverse_ssn', {
        params: {
            token
        }
    })
}

export async function post_reverse_ssn_history() {
    return $axios_protected.post('/find/reverse_ssn_history')
}

// SSN Reverse end

//  DL start
export async function post_dl(FirstName, LastName, Address, City, State) {
    return $axios_protected.post('/find/dl', {
        FirstName,
        LastName,
        Address,
        City,
        State
    })
}

export async function get_dl(token) {
    return $axios_protected.get('/find/fetch/dl', {
        params: {
            token
        }
    })
}

export async function post_dl_history() {
    return $axios_protected.post('/find/dl_history')
}

// DL end

//  DOB start
export async function post_dob(FirstName, LastName, Address, City, State) {
    return $axios_protected.post('/find/dob', {
        FirstName,
        LastName,
        Address,
        City,
        State
    })
}

export async function get_dob(token) {
    return $axios_protected.get('/find/fetch/dob', {
        params: {
            token
        }
    })
}

export async function post_dob_history() {
    return $axios_protected.post('/find/dob_history')
}

// DOB end
