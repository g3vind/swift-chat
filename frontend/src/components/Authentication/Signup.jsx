import { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { MdOutlineManageAccounts } from "react-icons/md";

function Signup() {
  // States for handling on change of input fields in the form
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState(false);
  // for inverting the show and hide values
  function handleShow() {
    setShow(!show);
  }
  //   for uploading profile picture in signup
  function postPic(pics) {}
  // for handling submit of signup
  function submitHandller(e) {}
  return (
    <VStack spacing="5px" color="black">
      {/* NAME */}
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></Input>
      </FormControl>
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
      {/* CONFIRM PASSWORD */}
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm Your Password"
            onChange={(e) => {
              setConfirmpassword(e.target.value);
            }}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShow}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* PROFILE PICTURE */}
      <FormControl id="pic" isRequired>
        <FormLabel>Upload Profile Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          placeholder="Upload Profile Picture"
          onChange={(e) => {
            postPic(e.target.files[0]);
          }}
        ></Input>
      </FormControl>
      {/* SIGNUP BUTTON */}
      <Button
        color="black"
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandller}
      >
        Sign Up &nbsp;
        <MdOutlineManageAccounts />
      </Button>
    </VStack>
  );
}

export default Signup;
