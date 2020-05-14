 export interface MsgWall {
     id: number;
     chatId: string;
     name: string;
     message: string;
     messageTime: Date;
 };

 export interface MsgsWall extends Array<MsgWall> {};