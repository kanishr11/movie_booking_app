import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar_Comp from './Navbar_Comp';

function Conjurin() {
  return (
    <div>
      <Navbar_Comp />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            backgroundImage: 'url(https://thesouthfirst.com/wp-content/uploads/2023/12/A-poster-of-the-film-Conjuring-Kannappan.jpg)',
            backgroundSize: 'cover',
            flex: '1',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
          }}
        >
          <div style={{ flex: '1', marginRight: '30px', marginLeft: '200px' }}>
            <Card style={{ width: '50%' }}>
              <Card.Img
                variant="top"
                src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/conjuring-kannappan-et00378033-1702017515.jpg"
                style={{ width: '100%', height: '400px' }}
              />
              <Card.Body>
                <Card.Title>About the movie</Card.Title>
                <Card.Text>
                  Conjuring Kannappan is a Tamil movie starring Sathish Muthukrishnan, Regina Cassandra, and Elli EvRam
                  in prominent roles.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ color: 'white',marginTop:'50px' }}>Conjurin Kannappan</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <img style={{ width: '23px', marginRight: '5px',marginTop:'20px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png" />
            <h5 style={{ color: 'white', margin: '0',cursor:'pointer',marginTop:'20px' }}>8.6/10 7.3K Votes---></h5>
            </div>
            <div>
            <h5 className="border"style={{color:'white',padding:'10px',border:'30px',marginTop:'20px',display:'flex',justifyContent:'center'}}>Add your ratings & reviews <button style={{backgroundColor:'yellow',cursor:'pointer'}}>Rate now</button></h5>
            </div>
            <div>
              <button style={{marginTop:'20px',backgroundColor:'blueviolet',color:'white'}}>2D</button>
              <button style={{marginTop:'20px',backgroundColor:'blueviolet',color:'white'}}>Tamil</button>
            </div>
            <h5 style={{color:'yellow',marginTop:'20px'}}>2h 21m . Comedy,Horror . UA .8 Dec,2023</h5>
            <Button style={{ backgroundColor: 'red', marginTop: '20px',width:'200px' }} variant="primary">
            Book Tickets
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conjurin;
