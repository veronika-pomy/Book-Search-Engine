import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser (name: $name, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($criteria: BookInput) {
    saveBook(criteria: $BookInput) {
      _id
      username
      savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeSkill(bookId: $bookId) {
            _id
            username
            savedBooks
        }
    }
`;