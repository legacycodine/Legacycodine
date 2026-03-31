import React from 'react';
import { Layout, Menu, Space, Input } from 'antd';
import { LinkedinOutlined, TwitterOutlined, InstagramOutlined, SearchOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate here

const { Header: AntHeader } = Layout;
const { Search } = Input;

function Header() {
  const navigate = useNavigate(); // 2. Initialize the hook

  const headerStyle = {
    background: 'white',
    padding: '0 50px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    top: 0,
    borderBottom: '1px solid #e8e8e8',
  };

  const socialIconsStyle = {
    fontSize: '20px',
    color: '#005f73',
    margin: '0 8px',
  };

  const logoStyle = {
    height: '60px',
    marginRight: '20px',
  };

  // 3. Search logic to redirect users
  const onSearch = (value) => {
    const query = value.toLowerCase().trim();
    if (!query) return;

    if (query.includes('join') || query.includes('register') || query.includes('apply')) {
      navigate('/join');
    } else if (query.includes('blog') || query.includes('news') || query.includes('article')) {
      navigate('/blog');
    } else if (query.includes('program') || query.includes('course') || query.includes('learn')) {
      navigate('/programs');
    } else if (query.includes('contact') || query.includes('email') || query.includes('address')) {
      navigate('/contact');
    } else if (query.includes('impact') || query.includes('story') || query.includes('alumni')) {
      navigate('/impact-stories');
    } else {
      // Sends them to the blog with the search term in the URL
      navigate(`/blog?search=${encodeURIComponent(query)}`);
    }
  };

  const menuItems = [
    { key: 'home', label: <Link to="/">Home</Link> },
    { key: 'about', label: <Link to="/about">About</Link> },
    { key: 'programs', label: <Link to="/programs">Programs</Link> },
    { key: 'blog', label: <Link to="/blog">Blog</Link> },
    { key: 'impact-stories', label: <Link to="/impact-stories">Impact Stories</Link> },
    { key: 'contact', label: <Link to="/contact">Contact</Link> },
    { key: 'join', label: <Link to="/join">Join</Link> }
  ];

  return (
    <AntHeader style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/legacycodine-logo.png" alt="Legacycodine Logo" style={logoStyle} />
        <Menu 
          mode="horizontal" 
          style={{ borderBottom: 'none', backgroundColor: 'white', flex: 1, display: 'flex', justifyContent: 'center' }} 
          items={menuItems} 
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Search
          placeholder="Search..."
          onSearch={onSearch} // 4. Integrated the function here
          prefix={<SearchOutlined style={{ color: '#005f73' }} />}
          style={{ width: 200, marginRight: 16 }}
        />
        <Space>
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
    </AntHeader>
  );
}

export default Header;