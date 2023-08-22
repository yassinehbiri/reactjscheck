import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">yassinehbiri</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Puerta_de_Alcal%C3%A1%2C_Madrid%2C_Espa%C3%B1a%2C_2017-05-18%2C_DD_14.jpg/1280px-Puerta_de_Alcal%C3%A1%2C_Madrid%2C_Espa%C3%B1a%2C_2017-05-18%2C_DD_14.jpg" />
      <Card.Body>
        <Card.Title>madrid</Card.Title>
        <Card.Text>
        Madrid  is the capital and most populous city of Spain. The city has almost 3.4 million inhabitants and a metropolitan area population of approximately 6.7 million. It is the second-largest city in the European Union (EU), and its monocentric metropolitan area is the second-largest in the EU.
        </Card.Text>
        <Button variant="primary">click for more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://lp-cms-production.imgix.net/2019-06/8ae1c56041e64517e29372a889f1beb7-la-sagrada-familia.jpg?auto=format&fit=crop&ar=1:1&q=75&w=1200" />
      <Card.Body>
        <Card.Title>barcalone</Card.Title>
        <Card.Text>
        Barcelona  is a city on the northeastern coast of Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain. With a population of 1.6 million within city limits, its urban area extends to numerous neighbouring municipalities within the province of Barcelona and is home to around 4.8 million people, making it the fifth most populous urban area in the European Union after Paris, the Ruhr area, Madrid and Milan.
        </Card.Text>
        <Button variant="primary">click for more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.civitatis.com/f/espana/sevilla/guia/sevilla-m.jpg" />
      <Card.Body>
        <Card.Title>seville</Card.Title>
        <Card.Text>
        Seville  is the capital and largest city of the Spanish autonomous community of Andalusia and the province of Seville. It is situated on the lower reaches of the River Guadalquivir, in the southwest of the Iberian Peninsula.Seville has a municipal population of about 701,000 as of 2022, and a metropolitan population of about 1.5 million, making it the largest city in Andalusia, the fourth-largest city in Spain and the 26th most populous municipality in the European Union.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
