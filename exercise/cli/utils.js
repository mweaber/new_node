const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname, "contacts.json");
// The fix for this exercise is the path module. We have a path that breaks and we need to use path to correct. 

// Using the path.join with the __dirname gives us the directory and then we add the file we want to access.

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contacts = fs.readFileSync(contactsLocation).toString();

  return JSON.parse(contacts);

  // Making a variable for a contact and reading the file that holds the JS objects of each contact. Once we have that we return a converted JS to JSON object for that contact
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  fs.writeFileSync(contactsLocation, JSON.stringify(contacts))
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

