import React, {useState} from 'react';
import {
  VStack,
  Center,
  Stack,
  Input,
  Text,
  Button,
  FormControl,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const UserRegister = () => {
  const [isEyeOn, setEyeOn] = useState({
    eyeOne: false,
    eyeTwo: false,
  });
  const person = (
    <Icon name="person" size={15} color="#200" style={{paddingLeft: 10}} />
  );
  const eyeOffPassword = (
    <Icon
      name={`${isEyeOn.eyeOne ? 'eye' : 'eye-off'}`}
      size={15}
      color="#200"
      style={{paddingRight: 10}}
      onPress={() => setEyeOn({...isEyeOn, eyeOne: !isEyeOn.eyeOne})}
    />
  );
  const eyeOffConfirmPassword = (
    <Icon
      name={`${isEyeOn.eyeTwo ? 'eye' : 'eye-off'}`}
      size={15}
      color="#200"
      style={{paddingRight: 10}}
      onPress={() => setEyeOn({...isEyeOn, eyeTwo: !isEyeOn.eyeTwo})}
    />
  );
  const email = (
    <Icon name="mail" size={15} color="#200" style={{paddingLeft: 10}} />
  );

  return (
    <VStack space={4} alignItems="center">
      <FormControl isInvalid>
        <Stack direction="column">
          <Center w="80" h="20">
            <Text bold fontSize="xl">
              Register
            </Text>
          </Center>
          <Center w="80" h="60px" rounded="md">
            <Stack>
              <Input
                rounded="2xl"
                px={2}
                w={{
                  base: '75%',
                  md: '25%',
                }}
                InputLeftElement={person}
                placeholder="Username"
              />
              <FormControl.ErrorMessage mt="-3px">
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </Center>

          <Center w="80" h="60px" rounded="md">
            <Input
              rounded="2xl"
              px={2}
              w={{
                base: '75%',
                md: '25%',
              }}
              InputLeftElement={email}
              placeholder="Email"
            />
          </Center>

          <Center w="80" h="60px" rounded="md">
            <Input
              rounded="2xl"
              px={2}
              w={{
                base: '75%',
                md: '25%',
              }}
              type={`${isEyeOn ? 'text' : 'password'}`}
              InputRightElement={eyeOffPassword}
              id="password"
              placeholder="Password"
            />
          </Center>

          <Center w="80" h="60px" rounded="md">
            <Input
              rounded="2xl"
              px={2}
              w={{
                base: '75%',
                md: '25%',
              }}
              type={`${isEyeOn ? 'text' : 'password'}`}
              InputRightElement={
                //   <Icon
                //     as={<MaterialIcons name="person" />}
                //     size={5}
                //     ml="2"
                //     color="muted.400"
                //   />
                eyeOffConfirmPassword
              }
              placeholder="Confirm Password"
            />
          </Center>

          <Center w="80" h="60px" rounded="md">
            <Text fontSize="xs" mb={2} color="primary.600">
              Already have an account?{' '}
            </Text>
            <Button size="sm" rounded="2xl" px={10}>
              Submit
            </Button>
          </Center>
        </Stack>
      </FormControl>
    </VStack>
  );
};

export default UserRegister;
