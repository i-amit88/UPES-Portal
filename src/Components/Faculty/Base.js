import React, { useState, useEffect } from 'react'
import { UserOutlined, IdcardOutlined, ScheduleOutlined, AppstoreOutlined, PlusOutlined, FolderViewOutlined, LogoutOutlined, DashboardOutlined, OrderedListOutlined ,NotificationOutlined, MessageOutlined, FileTextOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons'
import { Layout, Menu, Dropdown, Avatar, Image, ConfigProvider } from 'antd'
import { getAuthToken, signout } from '../../Helper/Authentication'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useMsal } from '@azure/msal-react'

const { Header, Content, Footer, Sider } = Layout
const FacultyBase = (props) => {
  const location = useLocation()

  useEffect(() => {
    let user = getAuthToken().user
    if(user.role !== "faculty"){
      return window.location.href = "/" 
    }
  }, [getAuthToken])
  const [dark, setDark] = useState(true)
  const navigate = useNavigate()
  const { instance } = useMsal()

  const mode = () => {
    if(dark)
      setDark(false)
    else  
      setDark(true)
  }

  const logout = () => {
    signout()
      .then((data) => {
        if(data.redirect){
          instance.logoutRedirect()
            .then((result) => {
              if(result)
                return navigate('/?logout=true')
              alert("Error Occurred!")
              
            })
            .catch(err => {
              alert('error occured')
            })
        }  
      })
  }
  
  const items = [
    {
      key: '2',
      label: (
        <Link to='/faculty/profile'>
          Profile
        </Link>
      ),
    },
    {
      key: '1',
      label: (
        <a href='#' onClick={() => logout()}>
          Logout
        </a>
      ),
    },
  ]
  const menuItem = [
    {
      key: "/faculty/dashboard",
      icon: React.createElement(DashboardOutlined),
      label: (<Link to="/faculty/dashboard">Dashboard</Link>),
    },
    {
      key: "/faculty/timetable",
      icon: React.createElement(ScheduleOutlined),
      label: (<Link to="/faculty/timetable">Timetable</Link>),
    },
    {
      key: "/faculty/announcement/view",
      icon: React.createElement(FolderViewOutlined),
      label: (<Link to="/faculty/announcement/view">Announcement</Link>),
    },
    {
      key: "/faculty/course",
      icon: React.createElement(OrderedListOutlined),
      label: (<Link to="/faculty/course">Courses</Link>),
    },
    {
      key: "/faculty/profile",
      icon: React.createElement(IdcardOutlined),
      label: (<Link to="/faculty/profile">Profile</Link>),
    },
    {
      key: "/faculty/post/new",
      icon: React.createElement(PlusOutlined),
      label: (<Link to="/faculty/post/new">Post</Link>),
    },
    {
      key: "/faculty/message/view",
      icon: React.createElement(FolderViewOutlined),
      label: (<Link to="/faculty/message/view">Message</Link>),
    },
    {
      key: "/faculty/policy/view",
      icon: React.createElement(FolderViewOutlined),
      label: (<Link to="/faculty/policy/view">Policy</Link>),
    },
    {
      key: "/faculty/outlook/events",
      icon: React.createElement(FolderViewOutlined),
      label: (<Link to="/faculty/outlook/events">Meetings/Events</Link>),
    },
    {
      key: "/faculty/evaluate",
      icon: React.createElement(FolderViewOutlined),
      label: (<Link to="/faculty/evaluate">Evaluate</Link>),
    },
    {
      key: "Logout",
      icon: React.createElement(LogoutOutlined),
      label: (<Link onClick={logout}>Logout</Link>),
    },
    // {
    //   key: "Courses",
    //   icon: React.createElement(UserOutlined),
    //   label: `Courses`,
    // },
    ]
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#006494',
          borderRadius: 2,
          colorBgContainer: '#E8F1F2',
        },
        
      }}
    >
      <Layout>
        <Sider
          breakpoint="lg"
          theme={(dark ? "dark": "light")}
          collapsedWidth="0"
          style={{ height: '100vh', background: '#13293D'}}
        >
          <div className="demo-logo-vertical">
            <Image src='/upesfull.png'/>
          </div>
          <Menu
            theme={(dark ? "dark": "light")}
            mode="inline"
            style={{background: '#13293D', fontSize: '16px'}}
            defaultSelectedKeys={location.pathname}
            defaultOpenKeys={[]}
            items={menuItem}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
            }}
          >
            <Dropdown menu={{ items, }} placement='bottom'>
              <Avatar size="large" style={{ float: 'right', margin: '10px'}} icon={<UserOutlined />} />
            </Dropdown>          
          </Header>
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              { props.children }
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',

            }}
          >
            Debugged By Students 
          </Footer>
        </Layout>
        {/* <FloatButton icon={(dark ? <BulbFilled /> : <BulbOutlined />)} onClick={() => mode()} /> */}
      </Layout>
    </ConfigProvider>
  )
}
export default FacultyBase