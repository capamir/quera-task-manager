import { Text } from "@chakra-ui/react";
import React from "react";
import { ProjectType } from "../../../types/Project";

interface Props {
  project: ProjectType;
}

const Project: React.FC<Props> = ({ project }) => {
  const { name } = project;
  return (
    <Text fontSize="16px" fontWeight="500">
      {name}
    </Text>
  );
};

export default Project;
