// As this is the first thing loaded in the scripts from the html file start here to find which modules will require what.

// There is no window in a Node app so removed the window syntax and replaced with module.exports.

module.exports = {
  users: [
    {id: 1, name: 'Weezy'}
  ],
  posts: [
    {title: 'yo', body: 'I ate today', createdBy: 1},
    {title: 'Me', body: 'Look at my selfie', createdBy: 1},
    {title: 'My doggy', body: 'my dog is better than yours', createdBy: 1}
  ]
}



