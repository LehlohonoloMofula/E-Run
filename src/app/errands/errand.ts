import { Comment } from './comment';

export interface Errand {
    id: number;
    name: string;
    title: string;
    due: Date;
    description: string;
    price: number;
    location: string;
    isFulfilled: boolean;
    createdAt: Date;
    modifiedAt: Date;
    // comment?: {
    //     id: number;
    // comment: string;
    // createdAt: Date;
    //}

}