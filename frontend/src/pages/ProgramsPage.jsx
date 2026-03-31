import React from 'react';
import { Layout, Row, Col, Typography, Card, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { CodeOutlined, RobotOutlined, HighlightOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const programsData = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description: 'Master front-end and back-end technologies to build modern, scalable web applications from scratch.',
    image: './stack.webp',
    link: '/programs/fullstack-bootcamp',
    icon: <CodeOutlined />,
    color: '#e6f7ff'
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    description: 'A hands-on workshop for young innovators to explore the fundamentals of AI and build models.',
    image: './machinelearning.webp',
    link: '/programs/ai-workshop',
    icon: <RobotOutlined />,
    color: '#f6ffed'
  },
  {
    id: 3,
    title: 'UI/UX Design Strategy',
    description: 'Learn the principles of user-centric design and create intuitive and engaging digital experiences.',
    image: './uxui.webp',
    link: '/programs/uiux-design',
    icon: <HighlightOutlined />,
    color: '#fff7e6'
  },
];

function ProgramsPage() {
  // ADJUSTED: Reduced padding from 200px to 100px for a slimmer profile
  const heroStyle = {
    background: `linear-gradient(rgba(0, 56, 68, 0.85), rgba(0, 95, 115, 0.75)), url('/ourprogram.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '100px 20px', 
    textAlign: 'center',
    color: '#fff',
    borderBottom: '6px solid #0a9396' 
  };

  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      {/* Slimmer Hero Section */}
      <div style={heroStyle}>
        <Title level={1} style={{ 
          color: '#fff', 
          fontWeight: '900', 
          fontSize: '42px', // Slightly smaller font for the slimmer section
          letterSpacing: '2px', 
          textShadow: '0 4px 12px rgba(0,0,0,0.4)',
          marginBottom: '0px',
          textTransform: 'uppercase'
        }}>
          OUR PROGRAMS
        </Title>
        
        <Divider style={{ 
          borderTopColor: '#94d2bd', 
          width: '60px', // Shorter divider
          minWidth: '60px', 
          margin: '15px auto',
          borderTopWidth: '3px' 
        }} />

        <Paragraph style={{ 
          color: '#f8f9fa', 
          fontSize: '18px', // Scaled down from 22px
          maxWidth: '750px', 
          margin: '0 auto', 
          lineHeight: '1.5',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)' 
        }}>
          Tailored educational paths designed to bridge the gap between <br />
          <span style={{ color: '#94d2bd', fontWeight: '700' }}>ambition</span> and a <span style={{ color: '#94d2bd', fontWeight: '700' }}>thriving tech career</span>.
        </Paragraph>
      </div>

      {/* Programs Grid Section */}
      <Content style={{ padding: '60px 50px', backgroundColor: '#fcfcfc' }}>
        <Row gutter={[32, 32]} justify="center">
          {programsData.map(program => (
            <Col key={program.id} xs={24} sm={12} md={8}>
              <Card
                hoverable
                bordered={false}
                style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  height: '100%',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                  textAlign: 'center'
                }}
                cover={
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      alt={program.title} 
                      src={program.image} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '-25px', 
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      backgroundColor: '#fff', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                      zIndex: 2,
                      border: `3px solid ${program.color}`
                    }}>
                      {React.cloneElement(program.icon, { style: { fontSize: '24px', color: '#005f73' } })}
                    </div>
                  </div>
                }
              >
                <div style={{ marginTop: '25px' }}>
                  <Title level={3} style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '700' }}>
                    {program.title}
                  </Title>
                  <Paragraph style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px', minHeight: '60px' }}>
                    {program.description}
                  </Paragraph>
                  <Link to={program.link}>
                    <Button 
                      type="primary" 
                      size="large"
                      style={{ 
                        backgroundColor: '#005f73', 
                        borderColor: '#005f73', 
                        borderRadius: '6px',
                        width: '100%',
                        fontWeight: '600'
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}

export default ProgramsPage;
