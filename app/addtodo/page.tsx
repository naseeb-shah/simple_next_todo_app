"use client";

import { Box, Button, Input, Spacer, Text, useToast } from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";

const AddTodo = () => {
  const toast = useToast();
  const [task, setTask] = useState({
    task: "",
    info: "",
  });
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const submit = () => {
    console.log('deen shshah')
    if (task.task.length < 5) {
      toast({
        title: "Invalid Task.",
        description: "Task word length should be greater than 5.",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    
    return
    }
    let taskString: string | null = localStorage.getItem("task");
    let allTask: [{ [key: string]: any }] | []|any = [];

    if (taskString) {
      allTask = JSON.parse(taskString);
      allTask .push(
       task
      )
      localStorage.setItem("task", JSON.stringify(allTask));
      toast({
        title: "Task Add Successfully",
        description: `${task.task}`,
        position: "top",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      setTask({
        task: "",
        info: "",
      });
    } else {
      localStorage.setItem("task", JSON.stringify([task]));
      toast({
        title: "Task Add Successfully",
        description: `${task.task}`,
        position: "top",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      setTask({
        task: "",
        info: "",
      });
    }
  }
  return (
    <Box
      w={{ base: "100px", md: "300px" }}
      display={"flex"}
      margin={"auto"}
      flexDir={"column"}
    >
      <Text fontWeight={"600"}>Add Todo</Text>

      <Box display={"flex"} justifyItems={"center"} flexDir={"column"}>
        <Input
          placeholder="Your task"
          colorScheme="facebook"
          variant={"outline"}
          value={task.task}
          name="task"
          mb={5}
          onChange={inputHandler}
          isRequired={true}
        />
        <Spacer />
        <Input
          placeholder="Additional Info"
          colorScheme="facebook"
          variant={"outline"}
          value={task.info}
          name="info"
          mb={5}
          onChange={inputHandler}
          isRequired={true}
        />
        <Button w={{base:'100px',md:'200px'}} margin={"auto"} onClick={submit}>
          Add Task
        </Button>
      </Box>
    </Box>
  );
};

export default AddTodo;
