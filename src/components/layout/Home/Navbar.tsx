import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { CiShare2 } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { TiThList } from "react-icons/ti";

interface ItemListType {
  name: string;
  label: string;
  icon: IconType;
}
const itemList: ItemListType[] = [
  {
    name: "نمایش لیستی",
    label: "listview",
    icon: TiThList,
  },
  {
    name: "نمایش ستونی",
    label: "boardview",
    icon: MdOutlineDashboard,
  },
  {
    name: "تقویم",
    label: "calendarview",
    icon: LuCalendarDays,
  },
];

interface Props {
  tab: string;
  setTab: (tab: string) => void;
}

const Navbar: React.FC<Props> = ({ tab, setTab }) => {
  return (
    <Box width="97%">
      <Flex marginY={3} gap={3}>
        <NavbarItem>
          <Heading as="h3" fontSize="22px">
            پروژه اول
          </Heading>
        </NavbarItem>
        {itemList.map((item) => (
          <NavbarItem>
            <HStack onClick={() => setTab(item.label)} cursor="pointer">
              <item.icon size={20} />
              <Text
                fontSize="18px"
                fontWeight="700"
                color={tab === item.label ? "brand-primary" : ""}
              >
                {item.name}
              </Text>
            </HStack>
          </NavbarItem>
        ))}
        <Spacer />
        <HStack>
          <CiShare2 size={20} />
          <Text>اشتراک گذاری</Text>
        </HStack>
      </Flex>
      <Divider />
    </Box>
  );
};

interface ItemProps {
  children: JSX.Element;
}
const NavbarItem: React.FC<ItemProps> = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <HStack alignItems="center">
      {children}
      <Box
        height={6}
        color={colorMode === "dark" ? "white" : ""}
        border="1px"
      />
    </HStack>
  );
};

export default Navbar;
