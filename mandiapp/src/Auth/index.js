export const doLogin = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next();
}

export const isLoggedIn = () => {
    let data = localStorage.getItem('data');
    // console.log("object");
    if (data == null) return false;
    else return true;
}

export const doLogout = (next) => {
    localStorage.removeItem("data");
    next();
}

export const getCurrentFarmerDetails = () => {
    if (isLoggedIn) return JSON.parse(localStorage.getItem("data")); else return false;
}