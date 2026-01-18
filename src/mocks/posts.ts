export type Comment = {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: string;
};

export type Post = {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  contentHtml: string;
  images?: string[];
  stats: {
    likes: number;
    comments: number;
  };
  comments: Comment[];
  createdAt: string;
};

export const MOCK_POSTS: Post[] = [
  {
    id: "p1",
    author: {
      name: "Tran Khanh Duy",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    contentHtml: `
      <p><strong>Welcome everyone!</strong></p>
      <p>This class will cover:</p>
      <ul>
        <li>Spring Boot 3</li>
        <li>Clean Architecture</li>
        <li>Microservices</li>
      </ul>
      <p>
        Please read the syllabus carefully before next week.
        This is a very long content to demonstrate show more behavior.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    `,
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    ],
    stats: {
      likes: 12,
      comments: 2,
    },
    comments: [
      {
        id: "c1",
        author: { name: "Student A" },
        content: "Looking forward to this class!",
        createdAt: "2026-01-01",
      },
      {
        id: "c2",
        author: { name: "Student B" },
        content: "Excited already 🔥",
        createdAt: "2026-01-02",
      },
    ],
    createdAt: "2026-01-01",
  },
  // thêm nhiều post ngắn
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: `p${i + 2}`,
    author: {
      name: "Tran Khanh Duy",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    contentHtml: `<p>Short announcement #${i + 1}</p>`,
    stats: {
      likes: Math.floor(Math.random() * 10),
      comments: 0,
    },
    comments: [],
    createdAt: "2026-01-03",
  })),
];
