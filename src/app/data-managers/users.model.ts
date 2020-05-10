 export interface User {
     id: number;
     name: string;
     username: string;
     createdAt: Date;
     createdById?: number;
 };

 export interface Users extends Array<User> {};