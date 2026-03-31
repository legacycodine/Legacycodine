import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  message,
  Card,
  Space,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data.success) {
        message.success("Message Sent Successfully!");
        form.resetFields();
      } else {
        message.error("Failed to send message.");
      }
    } catch (error) {
      message.error("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const heroSectionStyle = {
    background: `linear-gradient(rgba(35, 48, 49, 0.7), rgba(0, 95, 115, 0.7)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2670')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 0",
    textAlign: "center",
    color: "#fff",
  };

  const cardIconStyle = {
    fontSize: "24px",
    color: "#005f73",
    backgroundColor: "#e6f7ff",
    padding: "12px",
    borderRadius: "50%",
    marginBottom: "15px",
  };

  // Shared link style to keep it clean and subtle
  const linkStyle = { color: "rgba(0, 0, 0, 0.45)", transition: "color 0.3s" };

  return (
    <Layout style={{ backgroundColor: "#fff", paddingTop: "64px" }}>
      {/* Hero Section */}
      <div style={heroSectionStyle}>
        <Title
          level={1}
          style={{ color: "#fff", fontWeight: "bold", letterSpacing: "2px" }}
        >
          GET IN TOUCH
        </Title>
        <Paragraph style={{ color: "#fff", fontSize: "18px" }}>
          Have questions? We'd love to hear from you.
        </Paragraph>
      </div>

      <Content style={{ padding: "80px 50px" }}>
        <Row gutter={[64, 64]} justify="center">
          {/* Left: Professional Form */}
          <Col xs={24} lg={10}>
            <Card
              bordered={false}
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                borderRadius: "15px",
              }}
            >
              <Title level={3} style={{ marginBottom: "30px" }}>
                Send us a message
              </Title>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="firstName"
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="lastName"
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item name="description" rules={[{ required: true }]}>
                  <TextArea placeholder="How can we help you?" rows={5} />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={loading}
                    icon={<SendOutlined />}
                    style={{
                      backgroundColor: "#005f73",
                      borderColor: "#005f73",
                      height: "50px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          {/* Right: Icon-based Contact Info & Live Map */}
          <Col xs={24} lg={10}>
            <Title level={3} style={{ marginBottom: "40px" }}>
              Contact Information
            </Title>

            <Space
              direction="vertical"
              size={30}
              style={{ width: "100%", marginBottom: "40px" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <EnvironmentOutlined style={cardIconStyle} />
                <div>
                  <Title level={5} style={{ margin: 0 }}>
                    Visit Us
                  </Title>
                  <Text type="secondary">
                    29 prince Salisu Elegushi, Ilasa, Lekki, Lagos, Nigeria.
                  </Text>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <PhoneOutlined style={cardIconStyle} />
                <div>
                  <Title level={5} style={{ margin: 0 }}>
                    Call Us
                  </Title>
                  <a href="tel:+2348001234567" style={linkStyle}>
                    +234 816 331 5451
                  </a>
                  <br />
                  <a href="tel:+2349007654321" style={linkStyle}>
                    +234 900 765 4321
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <MailOutlined style={cardIconStyle} />
                <div>
                  <Title level={5} style={{ margin: 0 }}>
                    Email Us
                  </Title>
                  <a href="mailto:legacycodine@gmail.com" style={linkStyle}>
                    legacycodine@gmail.com
                  </a>
                  <br />
                  <a href="mailto:adebimpee842@gmail.com" style={linkStyle}>
                    adebimpee842@gmail.com
                  </a>
                </div>
              </div>
            </Space>

            {/* Live Google Map Embed */}
            <div
              style={{
                height: "300px",
                width: "100%",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <iframe
                title="Legacycodine Location"
                /* Updated src to target the new Lekki address specifically */
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.711883395984!2d3.5134!3d6.4311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5778a4869c9%3A0x6b777a840656e297!2s29%20Prince%20Salisu%20Elegushi%20St%2C%20Lekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1707950000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default ContactPage;