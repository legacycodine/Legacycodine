import React from 'react';
import { useParams, Link } from 'react-router-dom';
// Added 'Space' to the imports below - this is often why it goes blank!
import { Typography, Button, Row, Col, Divider, Card, List, Space } from 'antd';
import { CheckCircleFilled, ArrowLeftOutlined, RocketOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const programDetails = {
  'fullstack-bootcamp': {
    title: 'Full-Stack Web Development',
    subtitle: 'From zero to career-ready in 16 weeks.',
    description: 'Our most intensive program designed to take you through the entire web development stack.',
    curriculum: ['HTML5 & CSS3 Architecture', 'Modern JavaScript (ES6+)', 'React & State Management', 'Node.js & Express Backend', 'Database Design with MongoDB'],
    duration: '16 Weeks',
    level: 'Beginner to Intermediate'
  },
  'ai-workshop': {
    title: 'AI & Machine Learning',
    subtitle: 'Building the intelligence of tomorrow.',
    description: 'Learn how to harness the power of artificial intelligence to solve real-world problems.',
    curriculum: ['Python for Data Science', 'Supervised vs Unsupervised Learning', 'Neural Networks Basics', 'Natural Language Processing', 'Deploying AI Models'],
    duration: '8 Weeks',
    level: 'Intermediate'
  },
  'uiux-design': {
    title: 'UI/UX Design Strategy',
    subtitle: 'Master the art of user-centric digital products.',
    description: 'Combine creativity with psychology to design apps and websites that users love.',
    curriculum: ['User Research & Personas', 'Wireframing & Prototyping', 'Figma Mastery', 'Visual Design Principles', 'Usability Testing'],
    duration: '10 Weeks',
    level: 'Beginner'
  }
};

function ProgramDetailPage() {
  const { programSlug } = useParams();
  
  // Safety Guard: Check if programSlug exists in our data
  const program = programDetails[programSlug];

  // If no program is found, show a "Not Found" message instead of crashing (going blank)
  if (!program) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <Title level={2}>Program Not Found</Title>
        <Paragraph>We couldn't find a program at this address.</Paragraph>
        <Link to="/programs"><Button icon={<ArrowLeftOutlined />}>Back to Programs</Button></Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div style={{ backgroundColor: '#005f73', padding: '80px 50px', color: '#fff' }}>
        <Link to="/programs" style={{ color: 'rgba(255,255,255,0.7)', display: 'inline-block', marginBottom: '20px' }}>
          <ArrowLeftOutlined /> Back to Programs
        </Link>
        <Title level={1} style={{ color: '#fff', margin: 0 }}>{program.title}</Title>
        <Paragraph style={{ color: '#e6f7ff', fontSize: '18px', marginTop: '10px' }}>{program.subtitle}</Paragraph>
      </div>

      <div style={{ padding: '60px 50px', maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[60, 40]}>
          <Col xs={24} md={14}>
            <Title level={2}>About this Program</Title>
            <Paragraph style={{ fontSize: '16px', color: '#555', lineHeight: '1.8' }}>
              {program.description}
            </Paragraph>
            <Divider />
            <Title level={3}>What you will learn</Title>
            <List
              dataSource={program.curriculum}
              renderItem={item => (
                <List.Item style={{ border: 'none', padding: '8px 0' }}>
                  <Space>
                    <CheckCircleFilled style={{ color: '#005f73' }} />
                    <Text style={{ fontSize: '16px' }}>{item}</Text>
                  </Space>
                </List.Item>
              )}
            />
          </Col>

          <Col xs={24} md={10}>
            <Card 
              style={{ borderRadius: '16px', boxShadow: '0 15px 40px rgba(0,0,0,0.08)', border: 'none' }}
              bodyStyle={{ padding: '40px' }}
            >
              <Title level={4} style={{ marginBottom: '25px' }}>Program Details</Title>
              <div style={{ marginBottom: '15px' }}>
                <Text type="secondary">Duration:</Text> <Text strong style={{ marginLeft: '8px' }}>{program.duration}</Text>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <Text type="secondary">Level:</Text> <Text strong style={{ marginLeft: '8px' }}>{program.level}</Text>
              </div>
              
              <Link to="/join">
                <Button 
                  type="primary" 
                  size="large" 
                  block 
                  icon={<RocketOutlined />}
                  style={{ backgroundColor: '#005f73', height: '55px', fontSize: '18px', borderRadius: '8px' }}
                >
                  Enroll Now
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProgramDetailPage;