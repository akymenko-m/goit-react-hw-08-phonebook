import { Avatar, Button, Tag, TagLabel } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/user/operations';
import { selectIsLoading, selectUser } from 'redux/user/selectors';
import { UserInfo } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <UserInfo>
      <Tag size="lg" colorScheme="teal" borderRadius="full">
        <Avatar
          src="https://i.pravatar.cc/50"
          size="xs"
          name="Segun Adebayo"
          ml={-1}
          mr={2}
        />
        <TagLabel>{userName.name}</TagLabel>
      </Tag>

      <Button
        isLoading={isLoading}
        type="button"
        onClick={handleLogout}
        colorScheme="teal"
        size="sm"
        variant="outline"
      >
        Logout
      </Button>
    </UserInfo>
  );
};
