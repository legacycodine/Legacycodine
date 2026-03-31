import React from 'react';
import { Layout, Row, Col, Typography, Card, Avatar, Space, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const teamMembers = [
  { 
    name: 'Esther Adebimpe', 
    title: 'Founder', 
    avatar: '/ayoadebimpe.jpg'
  },
  { 
    name: 'Felix Asare', 
    title: 'Senior Developer', 
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    name: 'Michael Akande', 
    title: 'Head of Programs', 
    avatar: '/Micheal.png' 
  },
  { 
    name: 'Mike Johnson', 
    title: 'Lead Instructor', 
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    name: 'Solomon Apam', 
    title: 'Head of Marketing', 
    avatar: '/solomon.jpg' 
  },
  { 
    name: 'Rebecca White', 
    title: 'Community Manager', 
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  
];

function AboutPage() {
  const heroSectionStyle = {
    // FIX: Changed background shorthand to ensure no-repeat and proper center cover
    background: `linear-gradient(rgba(0, 56, 68, 0.85), rgba(0, 96, 115, 0.44)), url('https://icm.aexp-static.com/content/dam/contenthub/us/en/ach-images/2023/08/customer-service-preview.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '200px 50px', // Restored your preferred deep width
    textAlign: 'center',
    color: '#fff',
    //borderBottom: '6px solid #0a9396'
  };

  const originalCardStyle = {
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    height: '100%',
    border: 'none',
    transition: 'transform 0.3s ease'
  };

  const teamCardStyle = {
    borderRadius: '16px',
    border: 'none',
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    textAlign: 'center',
    padding: '20px',
    transition: 'all 0.3s ease',
    borderBottom: '4px solid #005f73' 
  };

  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      {/* Hero Section - Fixed background and restored text design */}
      <div style={heroSectionStyle}>
        <Title level={1} style={{ 
          color: '#fff', 
          fontWeight: '900', 
          fontSize: '48px', 
          letterSpacing: '2px', 
          textShadow: '0 4px 12px rgba(0,0,0,0.4)',
          marginBottom: '0px',
          textTransform: 'uppercase'
        }}>
          About Us
        </Title>

        <Divider style={{ 
          borderTopColor: '#94d2bd', 
          width: '80px', 
          minWidth: '80px', 
          margin: '20px auto',
          borderTopWidth: '3px' 
        }} />

        <Paragraph style={{ 
          color: '#fff', 
          fontSize: '20px', 
          maxWidth: '900px', 
          margin: '0 auto', 
          lineHeight: '1.6',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)' 
        }}>
          Legacycodine was founded with a <span style={{ color: '#94d2bd', fontWeight: '800' }}>simple yet powerful vision</span>: to make technology education and opportunities <span style={{ color: '#94d2bd', fontWeight: '800' }}>accessible to everyone</span>, regardless of their background.
        </Paragraph>
      </div>

      {/* Mission & Vision Section */}
      <Content style={{ padding: '80px 50px', backgroundColor: '#fcfcfc' }}>
        <Row gutter={[48, 24]} justify="center">
          <Col xs={24} md={10}>
            <Card 
              style={originalCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Title level={3} style={{ color: '#005f73', fontWeight: '800' }}>Our Mission</Title>
              <Paragraph style={{ fontSize: '16px', color: '#666', lineHeight: '1.7' }}>
                Our mission is to empower individuals and communities by providing the resources, skills, and networks needed to thrive in the digital age. We believe that a strong tech ecosystem is built on a foundation of inclusive education.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={10}>
            <Card 
              style={originalCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Title level={3} style={{ color: '#005f73', fontWeight: '800' }}>Our Vision</Title>
              <Paragraph style={{ fontSize: '16px', color: '#666', lineHeight: '1.7' }}>
                We envision a future where every aspiring innovator has the tools and confidence to build solutions that will shape tomorrow's world. We aim to be a catalyst for technological advancement across Africa.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Meet Our Team Section */}
      <div style={{ padding: '100px 20px', backgroundColor: '#fff' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '60px', fontWeight: '900', color: '#003844' }}>Meet Our Team</Title>
        <Row gutter={[32, 32]} justify="center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {teamMembers.map((member, index) => (
            <Col key={index} xs={24} sm={12} lg={8}>
              <Card 
                style={teamCardStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Space direction="vertical" align="center" size={16}>
                  <Avatar 
                    size={140} 
                    src={member.avatar} 
                    icon={<UserOutlined />} 
                    style={{ 
                      border: '4px solid #005f73', 
                      backgroundColor: '#fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <Title level={4} style={{ margin: '10px 0 0', fontWeight: '700' }}>{member.name}</Title>
                    <Text strong style={{ color: '#005f73', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.title}</Text>
                  </div>
                  <Paragraph type="secondary" style={{ fontStyle: 'italic', fontSize: '14px', marginBottom: 0 }}>
                    Dedicated to transforming tech education in Africa.
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  );
}

export default AboutPage;