export class User {
  id: number;
  name: string;
  email: string;
  address: {
      street: string;
      suite: string;
      city: string;
      zipcode: number;
      geo: {
        lat: number;
        lng: number;
      };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
