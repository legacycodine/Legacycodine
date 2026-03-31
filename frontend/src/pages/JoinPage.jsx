import React, { useState } from 'react';
import { Row, Col, Typography, Form, Input, Button, Card, Space, Select, Modal, message } from 'antd';
import { RocketOutlined, SafetyCertificateOutlined, TeamOutlined, GlobalOutlined, CheckCircleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

function JoinPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const joinImageUrl = "/startlegacy.png";  

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Endpoint changed to /api/join to match your server.js
      const response = await fetch('http://localhost:5000/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        setLoading(false);
        
        // Success Message
        Modal.success({
          title: 'Application Submitted!',
          icon: <CheckCircleFilled style={{ color: '#52c41a' }} />,
          centered: true,
          content: (
            <div style={{ marginTop: '15px' }}>
              <Text>
                Thank you, <b>{values.firstName}</b>! Your application for <b>{values.program}</b> has been received.
              </Text>
              <br /><br />
              <Text type="secondary">
                We've sent a confirmation to <b>{values.email}</b>. Redirecting you home...
              </Text>
            </div>
          ),
          okText: 'Return Home',
          onOk: () => navigate('/'),
        });

        // Auto-redirect after 4 seconds
        setTimeout(() => {
          Modal.destroyAll();
          navigate('/');
        }, 4000);

      } else {
        throw new Error(data.message || 'Server failed to process application');
      }
    } catch (error) {
      setLoading(false);
      message.error("Connection failed. Please ensure your backend server is running.");
      console.error("Submission Error:", error);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* 1. HERO SECTION WITH TEAL OVERLAY */}
      <div style={{ 
        position: 'relative',
        padding: '100px 50px 180px', 
        textAlign: 'center',
        color: '#fff',
        overflow: 'hidden',
        backgroundColor: '#005f73', 
      }}>
        <img
          src={joinImageUrl}
          alt="Join Legacycodine"
          style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            objectFit: 'cover', zIndex: 0,
          }}
        />
        
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(180deg, rgba(0, 95, 115, 0.85) 0%, rgba(8, 76, 91, 0.43) 100%)',
          zIndex: 1,
        }}></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <Title level={1} style={{ color: '#fff', fontWeight: '800', fontSize: '42px', marginBottom: '15px' }}>
            START YOUR LEGACY
          </Title>
          <Paragraph style={{ color: '#e6f7ff', fontSize: '18px', maxWidth: '650px', margin: '0 auto' }}>
            Take the first step toward a global tech career. Join a vibrant community of innovators and creators.
          </Paragraph>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '-120px auto 0', 
        padding: '0 20px', 
        position: 'relative', 
        zIndex: 10 
      }}>
        <Row gutter={[48, 48]} align="top">
          
          {/* LEFT SIDE: Why Join Us */}
          <Col xs={24} lg={11}>
            <div style={{ paddingTop: '140px', paddingBottom: '40px' }}>
              <Title level={2} style={{ color: '#005f73', marginBottom: '35px', fontWeight: '700' }}>
                Why Join Us?
              </Title>
              
              <Space direction="vertical" size={40} style={{ width: '100%' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <SafetyCertificateOutlined style={{ fontSize: '32px', color: '#005f73' }} />
                  <div>
                    <Text strong style={{ fontSize: '18px', display: 'block', color: '#333' }}>Industry Certification</Text>
                    <Text type="secondary" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      Earn a certificate recognized by leading tech firms and startups globally.
                    </Text>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <TeamOutlined style={{ fontSize: '32px', color: '#005f73' }} />
                  <div>
                    <Text strong style={{ fontSize: '18px', display: 'block', color: '#333' }}>Expert Mentorship</Text>
                    <Text type="secondary" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      Get 1-on-1 guidance from seniors working at top-tier global companies.
                    </Text>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <GlobalOutlined style={{ fontSize: '32px', color: '#005f73' }} />
                  <div>
                    <Text strong style={{ fontSize: '18px', display: 'block', color: '#333' }}>Global Network</Text>
                    <Text type="secondary" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      Connect with peers and alumni across the globe for collaborations.
                    </Text>
                  </div>
                </div>
              </Space>
            </div>
          </Col>

          {/* RIGHT SIDE: Enrollment Card */}
          <Col xs={24} lg={13}>
            <Card 
              bordered={false}
              style={{ 
                borderRadius: '24px', 
                boxShadow: '0 30px 70px rgba(0,0,0,0.18)', 
                padding: '24px',
                background: '#ffffff'
              }}
            >
              <Title level={3} style={{ marginBottom: '30px', fontWeight: '700' }}>Enrollment Form</Title>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false} 
                scrollToFirstError
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="firstName" label={<Text strong>First Name</Text>} rules={[{ required: true, message: 'Required' }]}>
                      <Input size="large" placeholder="Jane" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="lastName" label={<Text strong>Last Name</Text>} rules={[{ required: true, message: 'Required' }]}>
                      <Input size="large" placeholder="Doe" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item name="email" label={<Text strong>Email Address</Text>} rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}>
                  <Input size="large" placeholder="jane@example.com" />
                </Form.Item>

                <Form.Item name="program" label={<Text strong>Select Program</Text>} rules={[{ required: true, message: 'Please select a program' }]}>
                  <Select size="large" placeholder="Choose your career path">
                    <Option value="Full-Stack Web Development">Full-Stack Web Development</Option>
                    <Option value="AI & Machine Learning">AI & Machine Learning</Option>
                    <Option value="UI/UX Design Strategy">UI/UX Design Strategy</Option>
                  </Select>
                </Form.Item>

                <Form.Item name="motivation" label={<Text strong>Why do you want to join Legacycodine?</Text>}>
                  <Input.TextArea rows={4} placeholder="Briefly tell us about your goals..." />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    size="large" 
                    block 
                    loading={loading}
                    icon={!loading && <RocketOutlined />}
                    style={{ 
                      backgroundColor: '#005f73', 
                      borderColor: '#005f73',
                      height: '60px', 
                      fontSize: '18px', 
                      borderRadius: '12px',
                      fontWeight: '700',
                      marginTop: '10px'
                    }}
                  >
                    {loading ? 'Sending Application...' : 'Submit Application'}
                  </Button>
                </Form.Item>
                
                <div style={{ textAlign: 'center' }}>
                  <Text type="secondary" style={{ fontSize: '14px' }}>
                    By submitting, you agree to our <a href="/privacy-policy" style={{ color: '#005f73', fontWeight: '600' }}>Privacy Policy</a>.
                  </Text>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default JoinPage;