import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { RiLoginBoxFill } from "react-icons/ri";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  function submitHandller(e) {}
  return (
    <VStack spacing="5px" color="black">
      {/* EMAIL */}
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>
      </FormControl>
      {/* PASSWORD */}
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShow}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        color="black"
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandller}
      >
        Login &nbsp;
        <RiLoginBoxFill />
      </Button>
    </VStack>
  );
}

export default Login;
