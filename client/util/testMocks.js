/**
 * Created by Bartlomiej Rutkowski on 23.10.16.
 */
export function createRandomString(length = 8) {
    return Math.random().toString(36).substring(length);
}

export function createRandomPost() {
    return {
        id: createRandomString(16),
        text: createRandomString(25)
    };
}

export function createPosts(number) {
    const posts = [];
    for(let x = 0; x < number; x++) {
        posts.push(createRandomPost());
    }
    return posts;
}
