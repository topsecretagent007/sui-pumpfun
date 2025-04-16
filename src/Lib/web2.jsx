import axios from "axios";


export const uploadIpfsWeb2 = async (data) => {
    try {
        const res = (await axios.post(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const createMemeTokenWeb2 = async (data) => {
    try {
        const res = (await axios.post(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const getMemeTokenWeb2 = async (data) => {
    try {
        const res = (await axios.get(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const getTopMemeWeb2 = async () => {
    try {
        const res = (await axios.get(`${BACKEND_URL}`)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const getSpecificMemeTokenWeb2 = async (data) => {
    try {
        const res = (await axios.get(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const buyMemeTokenWeb2 = async (data) => {
    try {
        const res = (await axios.post(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const sellMemeTokenWeb2 = async (data) => {
    try {
        const res = (await axios.post(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const getSpecificMemeTokenTradeWeb2 = async (data) => {
    try {
        const res = (await axios.get(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const getSpecificMemeTokenTradeChartWeb2 = async (data) => {
    try {
        const res = (await axios.get(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const getSpecificMemeHolderWeb2 = async (data) => {
    try {
        const res = (await axios.get(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const sendMsgWeb2 = async (data) => {
    try {
        const res = (await axios.post(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const sendMsgLikeWeb2 = async (data) => {
    try {
        const res = (await axios.post(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}

export const getMsgWeb2 = async (data) => {
    try {
        const res = (await axios.get(`${BACKEND_URL}`, data)).data
        return res;
    } catch (err) {
        return false;
    }
}


export const getPrice = async () => {
    try {
        const data = {
            "api_key": "",
            "coin_type": ""
        }
        const res = (await axios.post(`https://`, data)).data
        return res;
    } catch (err) {
        return 0;
    }
}






