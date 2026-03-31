import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Typography, Card, Space, Empty, Button, Divider } from 'antd'; // Added Divider
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { blogData } from '../data/blogData';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const blogSectionStyle = {
  padding: '80px 50px',
  backgroundColor: '#fcfcfc', // Slightly lighter for a cleaner look
  minHeight: '600px',
};

const cardStyle = {
  borderRadius: '16px', // Matches your programs page cards
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease-in-out',
};

function BlogPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredPosts, setFilteredPosts] = useState(blogData);

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('search') || '';

  useEffect(() => {
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      const results = blogData.filter(post => 
        post.title.toLowerCase().includes(lowerCaseSearch) || 
        post.description.toLowerCase().includes(lowerCaseSearch) ||
        post.content.toLowerCase().includes(lowerCaseSearch)
      );
      setFilteredPosts(results);
    } else {
      setFilteredPosts(blogData);
    }
  }, [searchTerm]);

  // THE UPDATED HERO STYLE
  const heroSectionStyle = {
    background: `linear-gradient(rgba(0, 56, 68, 0.85), rgba(0, 95, 115, 0.75)), url('https://images.unsplash.com/photo-1507003211169-0a252b538f5e?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 50px',
    textAlign: 'center',
    color: '#fff',
    borderBottom: '6px solid #0a9396'
  };

  return (
    <Layout>
      {/* Updated Hero Section */}
      <div style={heroSectionStyle}>
        <Title level={1} style={{ 
          color: '#fff', 
          fontWeight: '900', 
          fontSize: '42px', 
          letterSpacing: '2px', 
          textShadow: '0 4px 12px rgba(0,0,0,0.4)',
          marginBottom: '0px',
          textTransform: 'uppercase'
        }}>
          Our Blog
        </Title>

        <Divider style={{ 
          borderTopColor: '#94d2bd', 
          width: '60px', 
          minWidth: '60px', 
          margin: '15px auto',
          borderTopWidth: '3px' 
        }} />

        <Paragraph style={{ 
          color: '#f8f9fa', 
          fontSize: '18px', 
          maxWidth: '750px', 
          margin: '0 auto', 
          lineHeight: '1.5',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)' 
        }}>
          Stay up-to-date with the latest <span style={{ color: '#94d2bd', fontWeight: '700' }}>news</span>, <span style={{ color: '#94d2bd', fontWeight: '700' }}>events</span>, and <span style={{ color: '#94d2bd', fontWeight: '700' }}>insights</span> from the world of technology.
        </Paragraph>
      </div>

      {/* Blog Posts Section */}
      <Content style={blogSectionStyle}>
        
        {searchTerm && (
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Text style={{ fontSize: '18px' }}>
              Showing results for: <Text strong>"{searchTerm}"</Text>
            </Text>
            <br />
            <Button 
              type="link" 
              onClick={() => navigate('/blog')} 
              style={{ color: '#005f73', marginTop: '10px' }}
            >
              Show all posts
            </Button>
          </div>
        )}

        {filteredPosts.length > 0 ? (
          <Row gutter={[32, 32]} justify="center">
            {filteredPosts.map(post => (
              <Col key={post.id} xs={24} sm={12} md={8}>
                <Link to={post.link}>
                  <Card
                    hoverable
                    style={cardStyle}
                    cover={<img alt={post.title} src={post.image} style={{ height: '220px', objectFit: 'cover' }} />}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <Meta
                      title={<Title level={4} style={{ margin: 0, fontWeight: '700' }}>{post.title}</Title>}
                      description={
                        <Space direction="vertical" style={{ width: '100%', marginTop: '10px' }}>
                          <Paragraph style={{ margin: 0, color: '#666', fontSize: '14px' }} ellipsis={{ rows: 2 }}>
                            {post.description}
                          </Paragraph>
                          <Divider style={{ margin: '12px 0' }} />
                          <Text style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {post.date}
                          </Text>
                        </Space>
                      }
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <div style={{ paddingTop: '50px' }}>
            <Empty 
              description={
                <span>
                  No blog posts found matching <Text strong>"{searchTerm}"</Text>
                </span>
              } 
            />
          </div>
        )}
      </Content>
    </Layout>
  );
}

export default BlogPage;