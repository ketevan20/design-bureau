export type ImageType = {
  _id: string;
  url: string;
  key: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  location: string;
  year: number;
  category: "interior" | "architecture" | string; 
  program: string; 
  status: "completed" | "in-progress" | string;
  area: number; 
  description: string;
  text: string;
  url: string;
  key: string;
  images: ImageType[]; 
  createdAt: string; 
  updatedAt: string;
  __v: number;
  subtitle: string;
};

export type TeamMemberType = {
  _id: string;
  name: string;
  expertise: string;
  location: string;
  position: string;
  url: string;
  key: string;
  createdAt: string;  
  updatedAt: string;   
  __v: number;
}