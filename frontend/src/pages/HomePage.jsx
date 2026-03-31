import React from 'react';
import { Card, Typography, Row, Col, Button, Collapse, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { RocketOutlined, BookOutlined, TeamOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const heroImageUrl = "/background.jpeg"; 

const faqData = [
  {
    key: '1',
    question: 'What is Legacycodine?',
    answer: 'Legacycodine is a platform dedicated to bridging the technology gap in the community by providing access to tech education and career opportunities for everyone.'
  },
  {
    key: '2',
    question: 'What courses does Legacycodine offer?',
    answer: 'We offer a range of programs from introductory coding workshops to advanced courses in data science, AI, and UI/UX design, led by professional tutors and experts.'
  },
  {
    key: '3',
    question: 'Are there any prerequisites to join?',
    answer: 'No, our courses are designed to be accessible to everyone, from complete beginners to those looking to advance their skills.'
  },
  {
    key: '4',
    question: 'How do I get involved in the community?',
    answer: 'You can join our online forums, attend virtual meetups, and participate in our mentorship programs to connect with other tech enthusiasts and professionals.'
  },
];

function HomePage() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <div 
        style={{
          height: '95vh', 
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <img
          src={heroImageUrl}
          alt="Team collaborating"
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: '50% 40%', zIndex: 0,
          }}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          zIndex: 1, 
        }}></div>

        <div style={{ position: 'relative', zIndex: 2, padding: '0 50px' }}> 
          <Title level={1} style={{ color: '#fff', fontSize: '48px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            BRIDGING TECH IN THE COMMUNITY.
          </Title>
          <Paragraph style={{ color: '#fff', fontSize: '18px', maxWidth: '700px', margin: '0 auto 20px', textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
            At Legacycodine, we are dedicated to fostering a vibrant tech community by making technology education and opportunities accessible to all.
          </Paragraph>
          <Link to="/about">
            <Button type="primary" size="large" style={{ backgroundColor: '#005f73', borderColor: '#005f73', height: '50px', padding: '0 30px', borderRadius: '4px' }}>
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* "What We Do" Section - Clean White Background */}
      <div style={{ padding: '120px 50px', backgroundColor: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <Title level={2} style={{ color: '#005f73', fontWeight: '800', letterSpacing: '1px' }}>WHAT WE DO</Title>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#005f73', margin: '15px auto 25px' }}></div>
          <Paragraph style={{ maxWidth: '750px', margin: '0 auto', fontSize: '17px', color: '#555', lineHeight: '1.8' }}>
            We provide a dynamic platform that connects aspiring tech professionals with world-class resources, mentorship, and opportunities.
          </Paragraph>
        </div>

        <Row gutter={[40, 40]} justify="center">
          {[
            { 
              icon: <RocketOutlined />, 
              title: 'Education', 
              desc: "Equipping individuals with the skills needed to succeed through hands-on workshops and bootcamps.",
              color: '#e6f7ff'
            },
            { 
              icon: <BookOutlined />, 
              title: 'Community', 
              desc: "A collaborative space for networking, mentorship, and peer support through forums and meetups.",
              color: '#f6ffed'
            },
            { 
              icon: <TeamOutlined />, 
              title: 'Opportunities', 
              desc: "Bridging the gap between talent and industry through internships and job placement services.",
              color: '#fff7e6'
            }
          ].map((item, index) => (
            <Col xs={24} md={8} key={index}>
              <Card 
                hoverable 
                bordered={false}
                style={{ 
                  textAlign: 'center', 
                  borderRadius: '16px', 
                  height: '100%',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                  padding: '30px 20px'
                }}
              >
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '85px', 
                  height: '85px', 
                  borderRadius: '50%', 
                  backgroundColor: item.color,
                  marginBottom: '30px' 
                }}>
                  {React.cloneElement(item.icon, { style: { fontSize: '36px', color: '#005f73' } })}
                </div>
                <Title level={3} style={{ fontSize: '24px', marginBottom: '20px', fontWeight: '700' }}>{item.title}</Title>
                <Paragraph style={{ color: '#666', fontSize: '15px', lineHeight: '1.7' }}>{item.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      
      {/* FAQ Section - TINTED BACKGROUND for better sectioning */}
      <div style={{ padding: '120px 50px', backgroundColor: '#f0f7f8' }}> 
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title level={2} style={{ fontWeight: '800', color: '#005f73' }}>FREQUENTLY ASKED QUESTIONS</Title>
          <Divider style={{ borderTopColor: '#005f73', width: '50px', minWidth: '50px', margin: '20px auto' }} />
        </div>

        <Row justify="center">
          <Col xs={24} md={20} lg={14}>
            <Collapse 
              accordion 
              ghost
              expandIconPosition="right"
              // Clean classic Plus/Minus icons
              expandIcon={({ isActive }) => isActive ? <MinusOutlined style={{ color: '#005f73' }} /> : <PlusOutlined style={{ color: '#005f73' }} />}
            >
              {faqData.map(item => (
                <Panel 
                  header={<Text strong style={{ fontSize: '18px', color: '#262626' }}>{item.question}</Text>} 
                  key={item.key} 
                  style={{ 
                    marginBottom: '20px', 
                    background: '#fff', 
                    borderRadius: '12px',
                    border: '1px solid #e1ebec',
                    boxShadow: '0 4px 15px rgba(0,95,115,0.03)',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ 
                    padding: '10px 30px 30px 30px', 
                    color: '#555', 
                    fontSize: '16px', 
                    lineHeight: '1.8',
                    borderTop: '1px solid #f0f7f8'
                  }}>
                    {item.answer}
                  </div>
                </Panel>
              ))}
            </Collapse>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomePage;