import "./App.css";
import { Typography,Layout } from 'antd';
import { SettingFilled } from '@ant-design/icons';
const { Title } = Typography;

const { Content } = Layout;
function App() {


  return (

    <div className="App" style={{textAlign: "center"}}>

  <Layout style={{backgroundColor: "rgba(0,0,0,.85) !important"}} className="layout">
    <Content style={{margin:"30px"}}>
      <Title style={{color: "#58c978", marginTop: "10vh"}}>RugDoc is under Maintenance</Title>
        <SettingFilled style={{ fontSize: 70, marginBottom: "20px" , color: '#58c978' }} />
      <Title level={3} style={{color: "#58c978"}}>We will be back shortly</Title>
      <p style={{color:"white", fontWeight:"bold"}}>While you're waiting, take a look at what we looked like just two months ago...</p>
      <iframe style={{ marginTop: "20px", width: "1000px", height: "100vh"}} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMkNvVcEBImKU3p-fiQT9ThnN77Ec6pxdMsFSJYPDtwt98DdmhLaO2RUhrrM01DjrMhE1TmwOKmGAZ/pubhtml?widget=true&amp;headers=false"></iframe>
      </Content>
    </Layout>
    </div>
  );
}

export default App;
