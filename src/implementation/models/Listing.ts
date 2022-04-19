import { IUserModel } from "./User";

interface IListingModel {
  id: number;
  title: string;
  owner: IUserModel;
  stack: boolean; // If the product has multiple pieces
  stackSize: number; // Amount per sale
  stock: number;
  price: number; // Price per stack only if product is stackable
}

export { IListingModel };
