import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <AnimatePresence>
      <List>
        {todos.map((todo) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <Todo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          </motion.div>
        ))}
      </List>
    </AnimatePresence>
  );
}

export default TodoList;
