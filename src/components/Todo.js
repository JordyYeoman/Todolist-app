import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
// import { Frame } from "framer";
import { motion } from "framer-motion";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <ListItem style={{ display: "flex" }}>
        <Checkbox
          checked={todo.completed}
          type="checkbox"
          onClick={handleCheckboxClick}
        />
        <Typography
          variant="body1"
          style={{
            textDecoration: todo.completed ? "line-through" : null,
          }}
        >
          {todo.task}
        </Typography>
        <IconButton onClick={handleRemoveClick}>
          <CloseIcon />
        </IconButton>
      </ListItem>
    </motion.div>
  );
}

export default Todo;
