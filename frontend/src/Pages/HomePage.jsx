import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Box,
  Text,
} from "@chakra-ui/react";
import { PiChatsBold } from "react-icons/pi";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";

function HomePage() {
  return (
    <Container maxW="cl" centerContent>
      {/* TITLE */}
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg={"white"}
        w="40%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
      >
        <Text
          fontSize="3xl"
          color="#000814"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Swift Chat <PiChatsBold style={{ marginLeft: "5px" }} />
        </Text>
      </Box>
      {/* LOGIN & SIGNUP */}
      <Box
        bg="white"
        w="40%"
        p={4}
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb="1em" ml="3em" mr="3em">
            <Tab width="50%">
              Log In &nbsp; <RiLoginBoxFill />
            </Tab>
            <Tab width="50%">
              Sign Up &nbsp;
              <MdOutlineManageAccounts />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
