import "./App.css";
import { Typography,Layout } from 'antd';
const { Title } = Typography;

const { Content } = Layout;
function App() {


  return (

    <div className="App" style={{textAlign: "center"}}>

  <Layout style={{backgroundColor: "rgba(0,0,0,.85) !important"}} className="layout">
    <Content style={{margin:"30px"}}>
      <Title style={{color: "#58c978", marginTop: "10vh"}}>RugDoc is under maintenance</Title>
        <img alt="codecat" style={{width: "100px", height: "100px", marginBottom: "20px"}} src="https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC80ZVwvMjE4OTg5XC9wcm9qZWN0c1wvMzAzMDQ0XC9hc3NldHNcLzUzXC81NTE1MTYyXC81NTc1YzFmMmJkYzdjOWQ0NTFkYTMyOTAzMTNlNTNiYy0xNjIyNTIwMzQ5LnN2ZyJ9:frontify:IANaf29Qd9UYkjqVH7-BzIXWSYOLJqrhHzUKvXnDQwQ?width=2400"></img>
      <Title level={3} style={{color: "#58c978"}}>We will be back shortly</Title>
      <p style={{color:"white", fontWeight:"bold"}}>While you're waiting, take a look at what we looked like just two months ago...</p>
      <iframe title="doc" style={{ marginTop: "20px", width: "min(1000px, 80vw)", height: "100vh"}} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMkNvVcEBImKU3p-fiQT9ThnN77Ec6pxdMsFSJYPDtwt98DdmhLaO2RUhrrM01DjrMhE1TmwOKmGAZ/pubhtml?widget=true&amp;headers=false"></iframe>
      </Content>
    </Layout>
    </div>
  );
}

export default App;
