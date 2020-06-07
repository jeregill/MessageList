import {Post} from "../store/state";

export interface action {
    type: POST_ACTIONS | USER_ACTIONS;
    payload: any
}

export enum POST_ACTIONS {
    ADD_POST= 'ADD_POST',
    DELETE_POST = 'DELETE_POST',
    TOGGLE_POSTS ='TOGGLE_POSTS',
    LIKE_POST = 'LIKE_POST',
    DISLIKE_POST = 'DISLIKE_POST',
    COMMENT_POST = 'COMMENT_POST',
    TOGGLE_COMMENTS = 'TOGGLE_COMMENTS',
    EDIT_POST = 'EDIT_POST'
}

export enum USER_ACTIONS {
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER',
}

let postID: number = 5;

// Action creators
export function likePost(id: number): action {
    return {
        type: POST_ACTIONS.LIKE_POST,
        payload: id
    }
}

export function dislikePost(id: number): action {
    return {
        type: POST_ACTIONS.DISLIKE_POST,
        payload: id
    }
}

export function addPost(content: Post): action {
    return {
        type: POST_ACTIONS.ADD_POST,
        payload: {...content, id: ++postID}
    }
}

export function editPost(editedContent: string, id: number): action {
    return {
        type: POST_ACTIONS.EDIT_POST,
        payload: {editedContent, id}
    }
}

export function deletePost(id: number): action {
    return {
        type: POST_ACTIONS.DELETE_POST,
        payload: id
    }
}

export function commentPost(id: number, commentContent:string): action {
    return {
        type: POST_ACTIONS.COMMENT_POST,
        payload: {id, commentContent}
    }
}

export function toggleComments(id: number): action {
    return {
        type: POST_ACTIONS.TOGGLE_COMMENTS,
        payload: id
    }
}

export function togglePosts(): action {
    return {
        type: POST_ACTIONS.TOGGLE_POSTS,
        payload: null
    }
}