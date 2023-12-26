const getRefreshToken = () => {
    return localStorage.getItem("refreshToken");
}

export default getRefreshToken;