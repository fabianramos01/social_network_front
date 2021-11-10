import {deleteData, getData, postData} from "../config/client.https";

export function getPostList() {
    return getData(`/posts`);
}

export function getPost(id) {
    return getData(`/posts/${id}`);
}

export function createPost(data) {
    return postData('/posts', data);
}

export function createComment(id, data) {
    console.log(id)
    return postData(`/posts/${id}/comment`, data);
}

export function addReaction(data) {
    return postData('/posts/reaction', data);
}

export function removeReaction(data) {
    return deleteData('/posts/reaction', data);
}