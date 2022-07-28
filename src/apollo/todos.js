import { gql } from '@apollo/client'

export const GET_TODOS = gql(`
query AllTodos {
  todos:allTodos {
    id
    title
    completed
  }
}`)