import GenericService from './common/generic-crud.service';

const UserMngtService = new GenericService('users', 'user', 'id', {
  bodyPostWithOutItemKey: true,
});

export default UserMngtService;
