 export interface Message {
     id: number;
     name: string;
     message: string;
     messageTime: Date;
 };

 export interface Messages extends Array<Message> {};