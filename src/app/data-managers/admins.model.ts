 export interface Admin {
     id: number;
     name: string;
     username: string;
     createdAt: Date;
     type: number;
     createdById?: number;
 };

 export interface Admins extends Array<Admin> {};