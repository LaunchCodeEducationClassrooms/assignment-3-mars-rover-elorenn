// name is a string that is the name of the message.
// commands is an array of Command objects.
// throws error if a name is NOT passed into the constructor as the first parameter

class Message {
  // Write code here!
  constructor (name, commands) {
    this.name = name;
    if (!name) {
      throw Error('Message name required.');
    }
    this.commands = commands;
  }
}

module.exports = Message;
