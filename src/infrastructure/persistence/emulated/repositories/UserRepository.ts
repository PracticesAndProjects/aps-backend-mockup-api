import { IUserModel } from "../../../../implementation/models";

const mockupUserDatabase: IUserModel[] = [
  {
    id: 1,
    username: "sampleuser",
    password: "samplepwd",
    profile: {
      name: "John Doe",
      email: "johndoe@mail.com",
      typology: 1,
      documentNumber: generateRandomId(1),
    },
  },
  {
    id: 2,
    username: "nextuser",
    password: "samplepwd",

    profile: {
      name: "Devon Arfield",
      email: "ddevn@mail.com",
      typology: 1,
      documentNumber: generateRandomId(1),
    },
  },
  {
    id: 3,
    username: "samplecompany",
    password: "samplepwd",
    profile: {
      name: "Target",
      email: "talk@target.com",
      typology: 2,
      documentNumber: generateRandomId(2),
    },
  },
];

interface ICreateUserResponse {
  success: boolean;
  user?: IUserModel;
}

export default class UserRepository {
  async fetchOneById(id: number): Promise<IUserModel> {
    return mockupUserDatabase[id - 1];
  }

  async fetchAll(): Promise<IUserModel[]> {
    return mockupUserDatabase;
  }

  async createSingle(data: IUserModel): Promise<ICreateUserResponse> {
    const newUser: IUserModel = {
      id: mockupUserDatabase.length + 1,
      username: data.username,
      password: data.password,
      profile: {
        name: data.profile.name,
        email: data.profile.email,
        typology: data.profile.typology,
        documentNumber: data.profile.documentNumber,
      },
    };

    mockupUserDatabase.push(newUser);

    return {
      success: true,
      user: newUser,
    };
  }
}

function generateRandomId(type: number) {
  if (type === 1) {
    const min = 11111111;
    const max = 99999999999;

    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  } else {
    const min = 1111111;
    const max = 99999999;
    const left = Math.floor(Math.random() * (max - min) + min);

    const minR = 11;
    const maxR = 99;
    const right = Math.floor(Math.random() * (maxR - minR) + minR);
    const fixed = "0001";

    return Number(left + "0001" + right);
  }
}
