import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  dummyGalleryData,
  dummyNewsData,
  dummySchoolInfo,
  type IGalleryImages,
  type NewsItem,
} from "../assets/assets";

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

const SchoolContext = createContext<IContext | undefined>(undefined);

axios.defaults.baseURL = "http://localhost:5173/";
axios.defaults.withCredentials = true;

export const SchoolProvider = ({ children }: { children: ReactNode }) => {
  const [schoolInfo, setSchoolInfo] = useState<ISchoolInfo | null>(null);
  const [news, setNews] = useState<NewsItem[] | null>(null);
  const [galleryImages, setGalleryImages] = useState<IGalleryImages[] | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  const fetchSchoolInfo = async () => {
    setLoading(true);

    try {
      // Replace with API call when backend is ready
      setSchoolInfo(dummySchoolInfo);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error.message);
      } else if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      setGalleryImages(dummyGalleryData);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchNews = async () => {
    try {
      setLoading(true);
      setNews(dummyNewsData);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchoolInfo();
    fetchGalleryImages();
    fetchNews();
  }, []);

  return (
    <SchoolContext.Provider
      value={{ loading, schoolInfo, fetchSchoolInfo, galleryImages, news }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const ctx = useContext(SchoolContext);

  if (!ctx) {
    throw new Error("useSchool must be used within SchoolProvider");
  }

  return ctx;
};
