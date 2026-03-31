import React from 'react';
import { Layout, Typography, Button, Space, Divider, Tag } from 'antd';
import { ArrowLeftOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const StoryDetailPage = () => {
  const navigate = useNavigate();
  const { storySlug } = useParams(); // Catches 'adaora-okeke-story' from URL

  return (
    <Layout style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <Content style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 20px' }}>
        
        {/* Navigation Back */}
        <Button 
          icon={<ArrowLeftOutlined />} 
          type="link" 
          onClick={() => navigate(-1)} 
          style={{ color: '#005f73', fontWeight: '600', marginBottom: '30px' }}
        >
          BACK TO IMPACT STORIES
        </Button>

        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Tag color="#005f73" style={{ marginBottom: '15px' }}>SUCCESS STORY</Tag>
          <Title level={1} style={{ fontSize: '42px', fontWeight: '800' }}>
            Transforming Dreams into Code
          </Title>
          <Space split={<Divider type="vertical" />} style={{ color: '#8c8c8c' }}>
            <Text type="secondary"><CalendarOutlined /> Feb 2026</Text>
            <Text type="secondary"><ClockCircleOutlined /> 5 Min Read</Text>
          </Space>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" 
          alt="Legacycodine Student" 
          style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '20px', marginBottom: '40px' }} 
        />

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Paragraph style={{ fontSize: '20px', lineHeight: '1.8', color: '#333', fontWeight: '500' }}>
            "I joined Legacycodine with zero technical knowledge. Today, I am contributing to projects that help millions. The mentorship here changed my life."
          </Paragraph>
          
          <Divider />

          <Paragraph style={{ fontSize: '17px', lineHeight: '1.9' }}>
            Being part of the tech ecosystem in Lagos seemed impossible until I found a community that spoke my language. At Legacycodine, the focus wasn't just on syntax; it was on solving real-world African problems.
          </Paragraph>

          <Paragraph style={{ fontSize: '17px', lineHeight: '1.9' }}>
            Whether it was debugging late-night React errors or understanding the complexities of Backend architecture, the support system was unwavering. This story is just the beginning of my journey in tech.
          </Paragraph>
        </div>
      </Content>
    </Layout>
  );
};

export default StoryDetailPage;