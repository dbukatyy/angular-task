interface ICompany {
	name: string;
	catchPhrase: string;
	bs: string;
};

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
    	lat: number;
    	lng: number;
    }
};

interface IUser {
    id: number;
	name: string;
	email: string;
	address: IAddress;
	phone: number;
	website: string;
	company: ICompany;
};

export class User: IUser;