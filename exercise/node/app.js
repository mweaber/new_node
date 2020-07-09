// Last in the modules is app so we require the functions that are being exported in api and remove all mentions of window.

// Inside the postTemplates is allowed since they are only strings being modified and not actually elements of the DOM being changed. 

// Exporting our functions at the bottom and all tests will pass.


const { getPostsForUser, getUserById} = require('./api')

const showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    })
    cb(postTemplates)
  })
}

const showUserProfile = (userId, cb) => {
  getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `
    cb(user)
  })
}

module.exports = {
    showPostsForCurrentUser,
    showUserProfile,
}


