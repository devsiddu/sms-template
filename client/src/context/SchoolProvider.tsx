import { useEffect, useState, type ReactNode } from "react";
import { SchoolContext, type ISchoolInfo } from "./SchoolContext";
import {
  dummyGalleryData,
  dummyNewsData,
  dummySchoolInfo,
  type IGalleryImages,
  type NewsItem,
} from "../assets/assets";
import axios from "axios";

export const SchoolProvider = ({ children }: { children: ReactNode }) => {
  const [schoolInfo, setSchoolInfo] = useState<ISchoolInfo | null>(null);
  const [news, setNews] = useState<NewsItem[] | []>([]);
  const [galleryImages, setGalleryImages] = useState<IGalleryImages[] | []>([]);
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
