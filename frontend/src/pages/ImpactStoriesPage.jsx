import React from 'react';
import { Layout, Row, Col, Typography, Card, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const storiesData = [
  {
    id: 1,
    name: 'Adaora Okeke',
    tag: 'Full-Stack Engineering',
    storySummary: 'After completing the Full-Stack Bootcamp, Adaora landed a job as a Junior Software Engineer at a leading fintech company in Lagos.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    link: '/stories/adaora-okeke-story',
  },
  {
    id: 2,
    name: 'Kwame Agyei',
    tag: 'AI & Machine Learning',
    storySummary: 'Kwame built a solar-powered smart garden system using AI to help local farmers optimize irrigation in rural regions.',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80',
    link: '/stories/kwame-agyei-story',
  },
  {
    id: 3,
    name: 'Fatima Ahmed',
    tag: 'UI/UX Design',
    storySummary: 'Fatima transitioned from graphic design to Product Design and now leads a team at a fast-growing e-commerce startup.',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=800&q=80',
    link: '/stories/fatima-ahmed-story',
  },
  {
    id: 4,
    name: 'David Oladipo',
    tag: 'Mobile Development',
    storySummary: 'David founded a tech startup providing on-demand support for SMEs after graduating from our mobile program.',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=800&q=80',
    link: '/stories/david-oladipo-story',
  },
];

function ImpactStoriesPage() {
  const heroStyle = {
    background: `linear-gradient(rgba(0, 56, 68, 0.85), rgba(0, 95, 115, 0.75)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 20px', 
    textAlign: 'center',
    color: '#fff',
    borderBottom: '6px solid #0a9396' 
  };

  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      {/* HERO SECTION - Updated to all-white design */}
      <div style={heroStyle}>
        <Title level={1} style={{ 
          color: '#fff', 
          fontWeight: '900', 
          fontSize: '42px', 
          letterSpacing: '2px', 
          textShadow: '0 4px 12px rgba(0,0,0,0.4)',
          marginBottom: '0px',
          textTransform: 'uppercase'
        }}>
          THE LEGACY LIVES ON
        </Title>

        <Divider style={{ 
          borderTopColor: '#fff', 
          width: '60px', 
          minWidth: '60px', 
          margin: '15px auto',
          borderTopWidth: '3px' 
        }} />

        <Paragraph style={{ 
          color: '#fff', 
          fontSize: '18px', 
          maxWidth: '800px', 
          margin: '0 auto', 
          lineHeight: '1.6',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)' 
        }}>
          Real journeys from the <span style={{ fontWeight: '800' }}>Legacycodine alumni community</span>. 
          From beginners to <span style={{ fontWeight: '800' }}>industry leaders</span> across the continent.
        </Paragraph>
      </div>

      {/* STORIES GRID */}
      <Content style={{ padding: '80px 50px', backgroundColor: '#fcfcfc' }}>
        <Row gutter={[32, 48]} justify="center">
          {storiesData.map(story => (
            <Col key={story.id} xs={24} sm={12} lg={6}>
              <Card
                hoverable
                bordered={false}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                cover={
                  <div style={{ height: '250px', overflow: 'hidden' }}>
                    <img 
                      alt={story.name} 
                      src={story.image} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Alumni+Story" }}
                    />
                  </div>
                }
              >
                <div style={{ marginBottom: '8px' }}>
                  <Text strong style={{ color: '#005f73', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {story.tag}
                  </Text>
                </div>
                
                <Title level={4} style={{ marginBottom: '12px', fontWeight: '700' }}>{story.name}</Title>
                
                <Paragraph style={{ color: '#666', fontSize: '14px', minHeight: '80px', lineHeight: '1.6' }}>
                  {story.storySummary}
                </Paragraph>

                <Link to={story.link} style={{ display: 'inline-block', marginTop: '10px' }}>
                  <Text style={{ 
                    color: '#005f73', 
                    fontWeight: '700', 
                    fontSize: '13px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    letterSpacing: '0.5px'
                  }}>
                    READ FULL STORY <ArrowRightOutlined style={{ fontSize: '12px' }} />
                  </Text>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* FOOTER CALL TO ACTION */}
      <div style={{ 
        textAlign: 'center', 
        padding: '100px 20px', 
        background: '#fff', 
        borderTop: '1px solid #f0f0f0' 
      }}>
        <Title level={2} style={{ fontWeight: '900', color: '#003844' }}>Your Tech Career Starts Here</Title>
        <Paragraph style={{ marginBottom: '30px', fontSize: '18px', color: '#666' }}>Ready to write your own impact story?</Paragraph>
        <Link to="/join">
          <Button 
            type="primary" 
            size="large" 
            style={{ 
                backgroundColor: '#005f73', 
                borderColor: '#005f73', 
                height: '55px', 
                borderRadius: '8px', 
                padding: '0 50px',
                fontWeight: '700',
                fontSize: '16px',
                boxShadow: '0 4px 14px rgba(0, 95, 115, 0.3)'
            }}
          >
            Apply Now
          </Button>
        </Link>
      </div>
    </Layout>
  );
}

export default ImpactStoriesPage;