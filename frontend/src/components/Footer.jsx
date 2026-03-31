import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import { LinkedinOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Text } = Typography;

function Footer() {
  const footerStyle = {
    textAlign: 'left',
    color: '#fff',
    backgroundColor: '#001529',
    padding: '40px 50px',
  };

  const socialIconsStyle = {
    fontSize: '24px',
    color: '#fff',
  };

  return (
    <AntFooter style={footerStyle}>
      <Row gutter={[48, 24]} justify="start">
        <Col xs={24} md={8}>
          <div style={{ marginBottom: '16px' }}>
            <img src="/legacycodine-logo.png" alt="Legacycodine Logo" style={{ height: '150px' }} />
          </div>
          <Paragraph style={{ color: '#aaa', lineHeight: '24px' }}>
            We believe in empowering a new generation of innovators to build a more inclusive future for everyone.
          </Paragraph>
        </Col>
        <Col xs={24} md={6}>
          <Title level={4} style={{ color: '#fff' }}>LINKS</Title>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}><Link to="/courses" style={{ color: '#fff' }}>Courses & Programs</Link></li>
            <li style={{ marginBottom: '8px' }}><Link to="/join" style={{ color: '#fff' }}>Join</Link></li>
            <li style={{ marginBottom: '8px' }}><Link to="/contact" style={{ color: '#fff' }}>Contact Us</Link></li>
            <li style={{ marginBottom: '8px' }}><Link to="/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</Link></li>
          </ul>
        </Col>
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: '#fff' }}>BLOG</Title>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/posts/coding-bootcamp" style={{ color: '#fff' }}>Building a Career in Tech: Your Next Steps</Link>
              <Text style={{ display: 'block', fontSize: '12px', color: '#ccc' }}>July 14, 2026</Text>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/posts/tech-for-youth" style={{ color: '#fff' }}>Upcoming Workshop: AI for Young Innovators</Link>
              <Text style={{ display: 'block', fontSize: '12px', color: '#ccc' }}>February 21, 2025</Text>
            </li>
          </ul>
        </Col>
      </Row>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #333' }}>
        <Text style={{ color: '#777' }}>
          Copyright © LEGACYCODINE 2025. All right Reserved. Created By Legacycodine
        </Text>
        <Space size="middle">
          <a href="https://www.linkedin.com/company/legacycodine" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined style={socialIconsStyle} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined style={socialIconsStyle} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined style={socialIconsStyle} />
          </a>
        </Space>
      </div>
    </AntFooter>
  );
}

export default Footer;