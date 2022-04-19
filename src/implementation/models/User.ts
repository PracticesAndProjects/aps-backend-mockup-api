interface IUserModel {
  id: number;
  typology: number;
  username: string;
  profile: IUserProfile;
}

interface IUserProfile {
  name: string;
  email: string;
  idType: number;
  id: number;
}

export { IUserModel };
