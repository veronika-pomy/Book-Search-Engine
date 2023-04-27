const { User } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get single user
          me: async (parent, { user = null, params }) => {
            const foundUser = await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
              });
          
              if (!foundUser) {
                return res.status(400).json({ message: 'Cannot find a user with this id!' });
              }
          
              res.json(foundUser);
          },
    },

    Mutation: {
        // create a user and sign a token, then return them
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });

            if (!user) {
                return res.status(400).json({ message: 'Something is wrong!' });
              }

            const token = signToken(user);
            return res.json({ token, user });
          },
        // log in user, find by email
        login: async (parent, { body }) => {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        
        // check if user exists 
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
          }
    
        // check password 
        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
          }
        
        const token = signToken(user);
        res.json({ token, user });
        },
        saveBook: async (parent, { user, body }) => {
            console.log(user);
            try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true }
            );
            return res.json(updatedUser);
            } catch (err) {
            console.log(err);
            return res.status(400).json(err);
            }
        },
        removeBook: async (parent, { user, params }) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: params.bookId } } },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: "Couldn't find user with this id!" });
            }

            return res.json(updatedUser);
        }
    }
}

module.exports = resolvers;