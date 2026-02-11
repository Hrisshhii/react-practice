export type Project={
  id:string;
  title:string;
  description:string;
  status:"planned"|"in-progress"|"completed";
  priority:"low"|"medium"|"high";
  dueDate?:string;
  tags?:string[];
  createdAt:Date;
  progress:number;
}