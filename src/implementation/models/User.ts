interface IUserModel {
  id: number;
  username: string;
  password: string;
  profile: IUserProfile;
}

interface IUserProfile {
  name: string;
  email: string;
  typology: number;
  documentNumber: number;
}

export { IUserModel };
