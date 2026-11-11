import axios from "axios";
import { createContext } from "react";
import { type IGalleryImages, type NewsItem } from "../assets/assets";

export interface ISchoolInfo {
  fullname: string;
  shortname: string;
  slogan: string;
  location: string;
  establishYear: number;
  hero_image: string;
  phone: string;
  email: string;
  map: string;
}

interface IContext {
  loading: boolean;
  schoolInfo: ISchoolInfo | null;
  fetchSchoolInfo: () => Promise<void>;
  galleryImages: IGalleryImages[];
  news: NewsItem[];
}

export const SchoolContext = createContext<IContext | undefined>(undefined);

axios.defaults.baseURL = "http://localhost:5173/";
axios.defaults.withCredentials = true;
