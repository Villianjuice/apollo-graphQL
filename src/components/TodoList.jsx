import { VStack } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';

import TodoItem from './TodoItem';
import TotalCount from './TotalCount';
import { GET_TODOS } from '../apollo/todos';

const TodoList = () => {
  const {data, loading, error} = useQuery(GET_TODOS);

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <h2>Error ...</h2>
  }

  return (
    <>
    <VStack spacing={2} mt={4}>
      {data.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </VStack>
    <TotalCount />
    </>
  );
};

export default TodoList;
