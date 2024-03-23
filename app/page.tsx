"use client";

import Link from "next/link";
import { TodoCard } from "./ui/todoCard";
import { Box, Heading , Text, Card, CardBody, Button, Spacer} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import {  AddIcon } from '@chakra-ui/icons'

const HomePage = () => {
  const [tasks, setTasks] = useState([]); 

  
  useEffect(() => {
    const taskString = localStorage.getItem("task");
    if (taskString) {
      setTasks(JSON.parse(taskString));
    }
  }, []); 

  const handleDelete = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.task !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };
  return (
    <Box w={{ base: "300px", md: "40%" }} m={"auto"} mt={20}>
      <Heading>Your Todo</Heading>
      {tasks.map((task, index) => (
        <TodoCard key={index} task={task} handleDelete={handleDelete} /> 
      ))}
      {!tasks.length&&<Card>
      <CardBody>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text>
            No Task 
          </Text>
<Spacer/>
          <Link href={'/addtodo'}>
          <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Add Task
            </Button>
          </Link>
        </Box>
      </CardBody>
    </Card>}
    </Box>
  );
};


export default HomePage;
