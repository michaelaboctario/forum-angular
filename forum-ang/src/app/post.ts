/*
export interface Post {
    id: number;
    postTitle: string;
    postContent: string
  };
*/

  export class Post {
    constructor(
      public id: number,
      public postTitle: string,
      public postContent: string,
    ) {  }
  }
