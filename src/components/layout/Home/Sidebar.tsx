import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  HStack,
  Spacer,
  Switch,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import { MdWbSunny } from "react-icons/md";
import Workspaces from "./Workspaces";
import { IoIosArrowBack, IoIosArrowDown, IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex direction="column" padding={3}>
      <Box marginBottom={10}>
        <Heading as="h1" fontSize="25px" marginTop="15px" marginBottom="30px">
          کوئرا تسک منیجر
        </Heading>
        <Flex cursor="pointer" onClick={onToggle}>
          <Text fontWeight="800" marginBottom={1}>
            ورک اسپیس ها
          </Text>
          <Spacer />
          {isOpen ? <IoIosArrowDown size={20} /> : <IoIosArrowBack size={20} />}
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Button
            fontSize="14px"
            leftIcon={<CiSquarePlus size={23} />}
            marginY={5}
          >
            ساختن ورک اسپیس جدید
          </Button>
          <Workspaces />
        </Collapse>
      </Box>
      <Box>
        <Box>
          <Text>نیلوفر موحود</Text>
        </Box>
        <Flex marginY={4}>
          <HStack>
            <IoIosLogOut size={22} />
            <Text fontSize="18px" marginBottom={1}>
              خروج
            </Text>
          </HStack>
          <Spacer />
          <HStack>
            <Switch
              colorScheme="green"
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
            />
            <Text whiteSpace="nowrap">
              {colorMode === "dark" ? <BsFillMoonStarsFill /> : <MdWbSunny />}
            </Text>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Sidebar;
