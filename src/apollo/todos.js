import { gql } from '@apollo/client'

export const ALL_TODO = gql`
query AllTodos {
  todos:allTodos {
    id
    title
    completed
  }
}`

export const ADD_TODO = gql`
mutation createTodo($title: String!, $user_id: ID!, $completed: Boolean! ) {
  newTodo: createTodo (title:$title, user_id: $user_id, completed:$completed) {
    title
    id
    completed
  }
}`

export const TOGGLE_TODO = gql`
mutation toggleComplete ($id: ID!, $completed: Boolean) {
  updateTodo (id: $id, completed: $completed) {
    id
    title
    completed
  }
}`

export const DELETE_TODO = gql`
  mutation DeleteTodo($id:ID!) {
    removeTodo(id:$id) {
      id
    }
  }
`;