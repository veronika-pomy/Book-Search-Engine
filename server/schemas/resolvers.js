const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
      // get single user
        me: async (parent, args, context) => {
          console.log(context.user);
          if (context.user) {
            const foundUser = await User.findOne({
              _id: context.user._id
            });
        
            if (!foundUser) {
              throw new AuthenticationError('Couldn\'t find data for this user.');
            }
            return foundUser;
        }
      }    
    },

    Mutation: {
        // create a user and sign a token, then return them
        addUser: async (parent, args) => {
            const user = await User.create(args);

            if (!user) {
              throw new AuthenticationError('Something went wrong with adding user.');
            }

            const token = signToken(user);
            return { token, user };
          },
        // log in user, find by email
        login: async (parent, { email, password }) => {
        const user = await User.findOne ( { email } );
        
        // check if user exists 
        if (!user) {
            throw new AuthenticationError('Wrong login credentials.');
          }
    
        // check password 
        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Wrong login credentials.');
        }
  
        const token = signToken(user);
        return { token, user };
        },
        saveBook: async (parent, { bookData }, context) => {
          console.log(context.user);
          if (context.user) {
            const updatedUser =  await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { savedBooks: bookData } },
              { new: true }
            );
          
            return updatedUser;
          } else {
            throw new AuthenticationError('Can\'t add book.');
          }
        },
        removeBook: async (parent, args) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: args.user._id },
                { $pull: { savedBooks: { bookId: args.bookId } } },
                { new: true }
            );

            if (!updatedUser) {
              throw new AuthenticationError('Couldn\'t find user with this id.');
            }

            return updatedUser;
        }
    }
}

module.exports = resolvers;