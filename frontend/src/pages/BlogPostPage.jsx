// import React from 'react';
// import { Layout, Typography } from 'antd';
// import { useParams, Navigate } from 'react-router-dom';

// const { Content } = Layout;
// const { Title, Paragraph } = Typography;

// // For this example, we'll redefine the blogData here.
// // In a real application, you might import this from a central data file.
// const blogData = [
//   {
//     id: 'coding-bootcamp',
//     title: 'Building a Career in Tech: Your Next Steps',
//     description: 'Learn how to navigate the tech landscape and find your dream career with our expert tips.',
//     date: 'September 14, 2025',
//     image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
//     content: "This is the full content for the blog post about building a tech career. You can add more text, headings, and images here to make the article complete. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat."
//   },
//   {
//     id: 'tech-for-youth',
//     title: 'Upcoming Workshop: AI for Young Innovators',
//     description: 'Join our hands-on workshop to explore the basics of Artificial Intelligence and its applications.',
//     date: 'August 20, 2025',
//     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
//     content: "This is the full content for the AI workshop blog post. We'll cover everything from machine learning to neural networks in a fun and interactive way. Nam convallis pulvinar urna. Duis quis velit ac magna dignissim vulputate. Donec a leo eget tellus iaculis malesuada. Aenean sed enim quis sem egestas egestas."
//   },
//   {
//     id: 'learn-to-code',
//     title: '5 Reasons to Learn to Code in 2025',
//     description: 'Coding is a superpower. Discover why it\'s the most valuable skill you can learn this year.',
//     date: 'July 10, 2025',
//     image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
//     content: "This is the full content for the blog post about why you should learn to code. We'll dive into the benefits for your career, creativity, and problem-solving skills. Suspendisse a nibh ut sem viverra feugiat. Aenean vel magna. Aenean non ante."
//   },
//   {
//     id: 'no-code-tools',
//     title: 'The Rise of No-Code Tools',
//     description: 'Find out how no-code platforms are empowering non-developers to build amazing things.',
//     date: 'June 5, 2025',
//     image: 'https://images.unsplash.com/photo-1558230232-a5d518208c70?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3',
//     content: "This is the full content for the no-code tools blog post. We explore how platforms like Webflow and Bubble are making it easier than ever to bring your ideas to life without writing a single line of code. Fusce ac felis sit amet ligula pharetra condimentum. Phasellus quis felis a arcu."
//   },
//   {
//     id: 'founder-interview',
//     title: 'Interview with Legacycodine\'s Co-Founder',
//     description: 'Our founder shares insights on the future of tech education and the mission of Legacycodine.',
//     date: 'May 1, 2025',
//     image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
//     content: "This is the full content for the founder interview. We discuss the origin story of Legacycodine, our commitment to social impact, and our vision for the future of tech education in Africa. Sed a lorem eu mi egestas lacinia. Mauris ut libero. Maecenas tristique orci ac sem."
//   },
// ];

// const blogPageStyle = {
//   padding: '50px 0',
//   maxWidth: '900px',
//   margin: '0 auto',
// };

// const imageStyle = {
//   width: '100%',
//   height: 'auto',
//   borderRadius: '10px',
//   marginBottom: '20px',
// };

// function BlogPostPage() {
//   const { postId } = useParams();
//   const post = blogData.find(p => p.id === postId);

//   if (!post) {
//     return <Navigate to="/blog" replace />;
//   }

//   return (
//     <Layout>
//       <Content style={blogPageStyle}>
//         <Title level={1}>{post.title}</Title>
//         <Paragraph type="secondary" style={{ marginBottom: '20px' }}>{post.date}</Paragraph>
//         <img src={post.image} alt={post.title} style={imageStyle} />
//         <Paragraph>{post.content}</Paragraph>
//       </Content>
//     </Layout>
//   );
// }

// export default BlogPostPage;

import React from 'react';
import { Layout, Typography } from 'antd';
import { useParams, Navigate } from 'react-router-dom';
import { blogData } from '../data/blogData'; // Import the centralized data file

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const blogPageStyle = {
  padding: '50px 0',
  maxWidth: '900px',
  margin: '0 auto',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  marginBottom: '20px',
};

function BlogPostPage() {
  const { postId } = useParams();
  const post = blogData.find(p => p.id === postId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <Content style={blogPageStyle}>
        <Title level={1}>{post.title}</Title>
        <Paragraph type="secondary" style={{ marginBottom: '20px' }}>{post.date}</Paragraph>
        <img src={post.image} alt={post.title} style={imageStyle} />
        <Paragraph>{post.content}</Paragraph>
      </Content>
    </Layout>
  );
}

export default BlogPostPage;