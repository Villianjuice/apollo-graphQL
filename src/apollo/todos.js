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