// This is the middle module between data and app so once again removed all the window syntax since no window and required the users and posts from data. 

// Looking at ./data we see that only users and posts are being exported so destructured those in the require and the functions that were window.xxxxx are now variables using const which will now need to be exported at the bottom of the page.

// NOTE: there is a shadow error in the naming of variables since posts was already declared in the require we could not keep that name inside getPostsForUsers after the time out so changed to have an _. 


const {users, posts} = require('./data');

const getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = users.find(user => user.id === id)
    cb(user)
  }, 150)
}

const getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const _posts = posts.filter(post => post.createdBy === userId)
    cb(_posts)
  }, 150)
}

module.exports = {
    getPostsForUser,
    getUserById
}

