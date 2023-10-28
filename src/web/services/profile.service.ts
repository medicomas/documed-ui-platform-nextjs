import GenericService from "./common/generic-crud.service";

const RESOURCE_PROFILE =  "auth/profile";

const ProfileService = new GenericService (
    RESOURCE_PROFILE,
    "profile",
    "id",
    {
        bodyPostWithOutItemKey: true
    }
);

export default ProfileService;