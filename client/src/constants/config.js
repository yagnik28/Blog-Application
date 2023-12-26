export const API_MSG = {
    loading: {
        title: "Loading...",
        message: "Data Loading, Please Wait"
    },
    success: {
        title: "Success",
        message: "Data Loaded Successfully."
    },
    responseError: {
        title: "Error",
        message: "An Error occured while getting response from server. Please try again."
    },
    requestError: {
        title: "Error",
        message: "An Error occured while parsing the data. May be because of connectivity issue b/w frontend and backend."
    },
    networkError: {
        title: "Error",
        message: "Unable to connect with server. Check internet connectivity"
    }
};

export const SERVICE_URLS = {
    userSignup: {
        route: "/signup",
        method: "POST"
    },
    userLogin: {
        route: "/login",
        method: "POST"
    },
    uploadFile: {
        route: "/file/upload",
        method: "POST"
    },
    createPost: {
        route: "/create",
        method: "POST"
    },
    getAllPosts: {
        route: "/posts",
        method: "GET",
        params: true
    },
    getPostById: {
        route: "/post/get",
        method: "GET",
        query: true
    },
    updatePost: {
        route: "/post/update",
        method: "PUT",
        query: true
    },
    deletePost: {
        route: "/post/delete",
        method: "DELETE",
        query: true
    },
    newComment: {
        route: "/comment/new",
        method: "POST"
    },
    getAllComments: {
        route: "/comments",
        method: "GET",
        query: true
    },
    deleteComment: {
        route: "/comment/delete",
        method: "DELETE",
        query: true
    }
}