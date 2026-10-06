// ============================================================
//  JKCSI WEBSITE CONTENT  —  edit this file to update the site.
//  PHOTOS: drop your image into /public/images/... using the same
//  file name, or change the "image" path below.
//  Until a photo exists, a blue placeholder is shown.
// ============================================================

export const school = {
  shortName: "JKCSI",
  fullName: "Josiah Ken Christian School Incorporated", // TODO: replace with the school's full official name
  tagline: "Nurturing minds. Building character. Growing in faith.",
  location: "P-4, Poblacion, Rosario, Agusan del Sur, Philippines",
  email: "josiahkenchristianschoolinc@gmail.com", // TODO: replace
  phone: "+63 930 994 3647", // TODO: replace
  facebook: "facebook.com/JosiahKenChristianSchoolInc/", // TODO: replace (or set to "" to hide)
  logo: "/images/logo.png", // optional: add your logo here, falls back to "JK" badge
  officeHours: "Monday – Friday, 7:30 AM – 4:30 PM",
};

export const hero = {
  image: "/images/hero/hero.jpg",
  title: "Welcome to JKCSI",
  subtitle:
    "A private Christian educational institution in the heart of Poblacion, Rosario, Agusan del Sur — where every child is known, loved, and equipped to learn.",
};

export const about = {
  image: "/images/hero/about.jpg",
  heading: "About Our School",
  paragraphs: [
    "JKCSI is a private Christian educational institution located in Poblacion, Rosario, Agusan del Sur, Philippines. We partner with families to give children a strong academic foundation rooted in Biblical values.",
    "From Nursery 1 to Grade 5, our caring teachers guide each learner with patience, excellence, and faith — helping them grow in knowledge, character, and love for God and community.",
  ],
  mission:
    "To provide quality Christ-centered education that develops the mind, heart, and character of every learner.",
  vision:
    "Graduates who are academically excellent, morally upright, and ready to serve God and country.",
  values: ["Faith", "Excellence", "Integrity", "Service", "Love"],
  stats: [
    { value: "9", label: "Grade Levels" }, // TODO: update numbers
    { value: "100%", label: "Christ-centered" },
    { value: "Small", label: "Class Sizes" },
  ],
};

// "What we offer" — one card per level. Replace the images!
export const programs = [
  { id: "n1", level: "Nursery 1", age: "Ages 2–3", image: "/images/grades/nursery1.jpg",
    blurb: "A gentle first step into school through play, songs, stories, and Bible time." },
  { id: "n2", level: "Nursery 2", age: "Ages 3–4", image: "/images/grades/nursery2.jpg",
    blurb: "Building early language, motor skills, and social confidence in a warm setting." },
  { id: "k", level: "Kindergarten", age: "Ages 5–6", image: "/images/grades/kinder.jpg",
    blurb: "Reading, writing, and number readiness with hands-on learning activities." },
  { id: "g1", level: "Grade 1", age: "Ages 6–7", image: "/images/grades/grade1.jpg",
    blurb: "Strong foundations in literacy, numeracy, and Christian values formation." },
  { id: "g2", level: "Grade 2", age: "Ages 7–8", image: "/images/grades/grade2.jpg",
    blurb: "Growing fluent readers and confident problem-solvers." },
  { id: "g3", level: "Grade 3", age: "Ages 8–9", image: "/images/grades/grade3.jpg",
    blurb: "Deeper learning in English, Science, Math, and Filipino with critical thinking." },
  { id: "g4", level: "Grade 4", age: "Ages 9–10", image: "/images/grades/grade4.jpg",
    blurb: "Developing independence, study habits, and leadership skills." },
  { id: "g5", level: "Grade 5", age: "Ages 10–11", image: "/images/grades/grade5.jpg",
    blurb: "Preparing learners for the next stage with excellence and character." },
];

// News / announcements / events. Newest first. Add a new object to post one.
// type: "Announcement" | "Event" | "Article"
export const posts = [
  { id: 1, type: "Event", title: "Annual Founding Anniversary Celebration",
    date: "2025-10-27", image: "/images/news/news1.jpg",
    excerpt: "Last October 27, 2025, we gathered in gratitude to celebrate 23 years of God’s faithfulness, love, and guidance to JKCSI. The celebration was filled with meaningful programs, fun games, fellowship, and cherished moments shared with our community.",
    body: "It was a special opportunity to look back on the blessings and milestones of the past 23 years while giving thanks for the people who have been part of JKCSI’s journey. Above all, we celebrate God’s unwavering faithfulness and look forward to the years ahead with hope and joy. \n\nPhoto Courtesy: Lyra Mae Buñol" },
  { id: 2, type: "Event", title: "Science Month 2026",
    date: "2026-10-02", image: "/images/news/news2.jpg",
    excerpt: "JKCSI proudly joins the celebration of Science Month 2026, highlighting the importance of science, discovery, creativity, and innovation in the lives of our learners.",
    body: "Throughout the month, students will have the opportunity to explore the wonders of science through engaging activities, educational presentations, experiments, games, and other exciting learning experiences. These activities are designed to encourage curiosity, critical thinking, teamwork, and a deeper appreciation for the world around us. Science Month is a time for our learners to discover that science is not only found in textbooks and classrooms—it is part of our everyday lives. Through hands-on experiences and fun challenges, students can learn, ask questions, make discoveries, and develop a greater passion for learning." },
  { id: 3, type: "Article", title: "5 Ways to Help Your Child Love Reading",
    date: "2026-09-20", image: "/images/news/news3.jpg",
    excerpt: "Reading is more than just a school requirement—it is a wonderful way for children to learn, imagine, and discover the world around them. Parents play an important role in helping children develop a love for books that can last a lifetime.",
    body: "1. Make Reading a Daily Habit: Set aside a few minutes each day for reading. It can be before bedtime, after school, or during a quiet afternoon. Even 10–15 minutes of reading each day can help children develop a consistent and enjoyable routine. \n\n2. Let Your Child Choose the Books: Give children the freedom to choose stories and topics that interest them. Whether they enjoy adventure, animals, science, fairy tales, or comics, allowing them to choose makes reading feel more exciting and personal. \n\n3. Create a Reading-Friendly Environment: Set up a cozy reading nook at home with good lighting and comfortable seating. This can make reading a more inviting experience for children. \n\n4. Model Reading Behavior: Let your child see you reading regularly. This can help them understand the value and enjoyment of reading. \n\n5. Make Reading Fun: Reading should not always feel like homework. Act out characters, discuss interesting stories, visit a library or bookstore, or connect books to activities your child enjoys. When children associate reading with fun and quality time, they are more likely to develop a genuine love for it." },
  { id: 4, type: "Announcement", title: "Official Website Launch",
    date: "2025-10-07", image: "/images/news/news4.jpg",
    excerpt: "We are excited to announce that JKCSI is officially launching its FIRST official website! This platform will serve as a hub for our school community, providing information about our programs, events, and news. We hope this website will help us connect with parents, students, and the wider community more effectively.",
    body: "Our new website is created to bring the JKCSI community closer together and make important school information more accessible to students, parents, teachers, alumni, and visitors. \n\nWhat you can find on our website: \n\n• School news and announcements \n\n• Upcoming events and activities \n\n• Important school information \n\n• Programs and updates \n\n• Photos and highlights from our school community \n\n• And more! \n\nThis is an exciting new chapter for JKCSI as we continue to grow, connect, and serve our community through technology."},
];


export const gallery = [
  { image: "/images/gallery/g1.jpg", caption: "Classroom learning" },
  { image: "/images/gallery/g2.jpg", caption: "Chapel time" },
  { image: "/images/gallery/g3.jpg", caption: "Career Guidance" },
  { image: "/images/gallery/g4.jpg", caption: "Science activity" },
  { image: "/images/gallery/g5.jpg", caption: "Recognition day" },
  { image: "/images/gallery/g6.jpg", caption: "World Teachers Day" },
  { image: "/images/gallery/g7.jpg", caption: "Art & crafts" },
  { image: "/images/gallery/g8.jpg", caption: "Buwan ng Wika" },
  { image: "/images/gallery/g9.jpg", caption: "Nutrition Month 2023" },
];

// Organizational chart: Administrator → Principal → Teachers
export const orgChart = {
  administrator: { name: "Rev. Josuel Q. Cabalan", role: "School Administrator", image: "/images/staff/administrator.jpg" },
  principal: { name: "Celita S. Cabalan", role: "School Principal", image: "/images/staff/principal.jpg" },
  teachers: [
    { name: "Lyra Mae O. Buñol", role: "Nursery 1 Teacher", image: "/images/staff/teacher-nursery1.jpg" },
    { name: "Jonah May Z. Bingcola", role: "Nursery 2 Teacher", image: "/images/staff/teacher-nursery2.jpg" },
    { name: "Jascha Kaye S. Cabalan, LPT", role: "Kindergarten Teacher", image: "/images/staff/teacher-kinder.jpg" },
    { name: "Rienchard F. Obrique, LPT", role: "Grade 1 Teacher", image: "/images/staff/teacher-grade1.jpg" },
    { name: "Rossana F. Epondol, LPT", role: "Grade 2 Teacher", image: "/images/staff/teacher-grade2.jpg" },
    { name: "Jessie Boy M. Nicor, LPT", role: "Grade 3 Teacher", image: "/images/staff/teacher-grade3.jpg" },
    { name: "Honey Rose P. Cose, LPT", role: "Grade 4 Teacher", image: "/images/staff/teacher-grade4.jpg" },
    { name: "Honey Rose P. Cose, LPT", role: "Grade 5 Teacher", image: "/images/staff/teacher-grade5.jpg" },
  ],
};

export const enroll = {
  image: "/images/hero/enroll.jpg",
  heading: "Give Your Child a Foundation That Lasts",
  intro:
    "Choosing a school is one of the most important decisions you'll make. At JKCSI, your child is not just a student — they're part of a caring Christian family.",
  reasons: [
    { icon: "cross", title: "Christ-Centered Education", text: "Biblical values woven into every subject, every day." },
    { icon: "graduation", title: "Academic Excellence", text: "A solid curriculum that prepares learners for higher grades." },
    { icon: "users", title: "Caring, Dedicated Teachers", text: "Small classes where every child is seen, known, and encouraged." },
    { icon: "shield", title: "Safe & Nurturing Environment", text: "A secure campus in the heart of Poblacion, Rosario." },
    { icon: "message", title: "Partnership with Parents", text: "Open communication so you're always part of your child's journey." },
    { icon: "heart", title: "Affordable & Accessible", text: "Quality private education within reach of local families." }, // TODO: confirm
  ],
  steps: [
    "Visit the school office or message us",
    "Submit the required documents",
    "Meet our teachers & complete enrollment",
  ],
  requirements: [ // TODO: replace with your actual requirements
    "PSA Birth Certificate (photocopy)",
    "Report card / Form 138 (for Grade 1–5)",
    "Certificate of Good Moral Character",
    "2×2 recent ID photos",
  ],
};
