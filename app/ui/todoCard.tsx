import { Box, Text, Card, CardBody, Button } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

interface Task {
  
  info: string;
  task: string;
}

export const TodoCard = ({ task ,handleDelete}: { task: Task,handleDelete: (taskId: string) => void;
}) => {
  return (
    <Card>
      <CardBody>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button>
            <CheckIcon />
          </Button>
          <Text w={"80%"} mr={"5%"} ml={"5%"}>
            {task.task}
          </Text>
          <Button onClick={()=>handleDelete(task.task)}>
            <DeleteIcon  />
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
};
