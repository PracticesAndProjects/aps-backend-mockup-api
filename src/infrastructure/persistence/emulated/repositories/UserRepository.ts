import { IUserModel } from "../../../../implementation/models";

const mockupUserDatabase: IUserModel[] = [
  {
    id: 1,
    username: "sampleuser",
    typology: 1,
    profile: {
      name: "John Doe",
      email: "johndoe@mail.com",
      idType: 1,
      id: generateRandomId(1),
    },
  },
  {
    id: 2,
    username: "nextuser",
    typology: 1,
    profile: {
      name: "Devon Arfield",
      email: "ddevn@mail.com",
      idType: 1,
      id: generateRandomId(1),
    },
  },
  {
    id: 3,
    username: "samplecompany",
    typology: 2,
    profile: {
      name: "Target",
      email: "talk@target.com",
      idType: 2,
      id: generateRandomId(2),
    },
  },
];

export default class UserRepository {
  async fetchOneById(id: number): Promise<IUserModel> {
    return mockupUserDatabase[id - 1];
  }

  async fetchAll(): Promise<IUserModel[]> {
    return mockupUserDatabase;
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
