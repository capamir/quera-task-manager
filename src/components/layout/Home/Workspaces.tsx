import {
  Box,
  Collapse,
  Flex,
  HStack,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import Project from "./Project";

const Workspaces = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex onClick={onToggle} cursor="pointer">
        <HStack>
          <Box bg="brand-primary" width={5} height={5} borderRadius="md" />
          <Text fontWeight="600" fontSize="15px" marginBottom={1}>
            درس مدیریت پروژه
          </Text>
        </HStack>
        <Spacer />
        {isOpen ? <IoIosArrowDown size={20} /> : <IoIosArrowBack size={20} />}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box paddingRight={7}>
          <Project project={{ id: 1, name: "پروژه اول" }} />
          <Project project={{ id: 1, name: "پروژه اول" }} />
        </Box>
      </Collapse>
    </Box>
  );
};

export default Workspaces;
