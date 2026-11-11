import school_bg from "./school.jpg";

export const assets = {
  school_bg,
};

export type NewsCategory =
  | "Events"
  | "Achievements"
  | "Announcements"
  | "Activities"
  | "Academics";

export interface ContentType {
  heading: string;
  paragraphs: string[];
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string; // YYYY-MM-DD
  image?: string;
  author: string;
  content: ContentType[];
  featured?: boolean;
}

export const dummyNewsData: NewsItem[] = [
  {
    id: 1,
    title: "Annual School Day Celebration",
    excerpt:
      "A memorable celebration bringing together students, teachers, parents, and the community to recognize talent, achievements, and the spirit of learning.",
    category: "Events",
    date: "2026-10-25",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=1400",
    author: "School Administration",
    content: [
      {
        heading: "A Celebration of Learning and Talent",
        paragraphs: [
          "The Annual School Day is an important occasion in the life of a school. It provides an opportunity to celebrate the learning journey, talents, and achievements of students.",
          "Students, teachers, parents, and members of the community come together to make the occasion memorable. It reflects the collective effort and dedication that contribute to a positive educational environment.",
        ],
      },
      {
        heading: "Encouraging Every Student",
        paragraphs: [
          "School celebrations provide students with opportunities to express themselves, develop confidence, and participate in activities beyond their regular classroom learning.",
          "Every performance, participation, and achievement represents an important step in a student's personal growth.",
        ],
      },
      {
        heading: "Growing Together as a Community",
        paragraphs: [
          "The support of parents, teachers, and the wider community plays an important role in the school's development. Such occasions strengthen these relationships and create lasting memories.",
          "We remain committed to creating opportunities where every student can learn, participate, and discover their potential.",
        ],
      },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Celebrating Student Achievements",
    excerpt:
      "Recognizing the dedication, hard work, and achievements of our students across different areas of learning.",
    category: "Achievements",
    date: "2026-10-18",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",
    author: "School Administration",
    content: [
      {
        heading: "Recognizing Student Efforts",
        paragraphs: [
          "Every achievement begins with effort, determination, and a willingness to learn. Recognizing student progress encourages children to continue developing their abilities.",
          "Academic learning, creativity, participation, and personal development all contribute to a student's journey.",
        ],
      },
      {
        heading: "Encouraging Future Growth",
        paragraphs: [
          "Teachers and parents play an important role in supporting students. Their encouragement helps children approach new challenges with confidence.",
          "We believe every student has the potential to grow and achieve meaningful goals.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "A Day of Learning and Creativity",
    excerpt:
      "Students explore their creativity and develop new skills through engaging classroom activities and collaborative learning.",
    category: "Activities",
    date: "2026-10-12",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200",
    author: "Teaching Staff",
    content: [
      {
        heading: "Learning Beyond Textbooks",
        paragraphs: [
          "Learning becomes meaningful when students have opportunities to explore ideas, ask questions, and participate actively.",
          "Creative classroom activities help students develop confidence, communication, and problem-solving skills.",
        ],
      },
      {
        heading: "Building Curiosity",
        paragraphs: [
          "A supportive learning environment encourages children to express ideas and discover new interests.",
          "Our goal is to make learning engaging while helping every student develop a strong foundation.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Important Notice for Parents",
    excerpt:
      "Parents are requested to stay connected with the school for upcoming academic activities and important announcements.",
    category: "Announcements",
    date: "2026-10-05",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200",
    author: "School Administration",
    content: [
      {
        heading: "Information for Parents",
        paragraphs: [
          "Communication between the school and parents is essential for supporting students throughout their education.",
          "Parents are encouraged to stay connected with the school office and follow official school communications for updates.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Building a Better Learning Environment",
    excerpt:
      "Our continued efforts to create a welcoming environment where students can learn, grow, and discover their potential.",
    category: "Activities",
    date: "2026-09-25",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200",
    author: "School Administration",
    content: [
      {
        heading: "A Positive Environment for Learning",
        paragraphs: [
          "A welcoming school environment supports learning, creativity, and the overall development of students.",
          "Teachers, parents, and students contribute to creating a positive atmosphere built on respect and cooperation.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Celebrating the Spirit of Togetherness",
    excerpt:
      "Students and teachers come together to celebrate shared experiences, teamwork, and the importance of community.",
    category: "Events",
    date: "2026-09-15",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200",
    author: "Teaching Staff",
    content: [
      {
        heading: "The Importance of Togetherness",
        paragraphs: [
          "A strong school community is built through cooperation, mutual respect, and shared experiences.",
          "Activities that bring students and teachers together help build friendships and a sense of belonging.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "School Admission Information",
    excerpt:
      "Information for parents interested in learning more about the school's admission process and educational environment.",
    category: "Announcements",
    date: "2026-09-05",
    image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=1200",
    author: "School Administration",
    content: [
      {
        heading: "Admission Enquiries",
        paragraphs: [
          "Parents interested in learning about the school and its educational environment are welcome to contact the school office.",
          "Please contact the school directly for verified admission requirements, available classes, and relevant dates.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Encouraging a Love for Reading",
    excerpt:
      "Promoting reading habits and helping students develop curiosity, imagination, and a lifelong interest in knowledge.",
    category: "Activities",
    date: "2026-08-28",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200",
    author: "Teaching Staff",
    content: [
      {
        heading: "Reading Opens New Worlds",
        paragraphs: [
          "Reading helps children improve their language, imagination, and understanding of the world around them.",
          "Developing a regular reading habit can support learning across different subjects and encourage independent thinking.",
        ],
      },
    ],
  },
];

export interface IGalleryImages {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
}
export const dummyGalleryData: IGalleryImages[] = [
  {
    id: "1",
    title: "School Campus",
    category: "Campus",
    date: "October 2026",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85",
    description: "A glimpse of the school campus and its surroundings.",
  },
  {
    id: "2",
    title: "Classroom Learning",
    category: "Learning",
    date: "September 2026",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    description: "Students learning and participating in classroom activities.",
  },
  {
    id: "3",
    title: "Students Together",
    category: "Students",
    date: "September 2026",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=85",
    description: "Students sharing experiences and learning together.",
  },
  {
    id: "4",
    title: "Sports and Activities",
    category: "Activities",
    date: "August 2026",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=85",
    description: "Encouraging teamwork, confidence, and participation.",
  },
  {
    id: "5",
    title: "Creative Learning",
    category: "Learning",
    date: "August 2026",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=85",
    description: "Learning through creativity and classroom activities.",
  },
  {
    id: "6",
    title: "School Celebration",
    category: "Events",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85",
    description: "A celebration bringing students and teachers together.",
  },
  {
    id: "7",
    title: "Outdoor Activities",
    category: "Activities",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1400&q=85",
    description: "Students participating in outdoor activities.",
  },
  {
    id: "8",
    title: "School Community",
    category: "Events",
    date: "June 2026",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85",
    description: "Building a strong connection within the school community.",
  },
  {
    id: "9",
    title: "Learning Environment",
    category: "Campus",
    date: "June 2026",
    image:
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1400&q=85",
    description: "An environment that supports curiosity and learning.",
  },
];

export const dummySchoolInfo = {
  fullname: "Yogisiddeshwar Government Kannada Primary School",
  shortname: "KHPS Tot Jokanatti",
  slogan: "",
  location: "Yogisiddeshwar Tot Jokanatti, Mudalagi, Karnatak",
  establishYear: 1984,
  hero_image:
    "https://drive.google.com/uc?export=view&id=1Y3VDkuT7tsfzh4LMEVhDw2317UW0pLrq",
  phone: "1234567890",
  email: "test@gmail.com",
  map: "https://www.google.com/maps/search/?api=1&query=Yogisiddeshwar+Tot+Jokanatti+Karnataka",
};
