import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar_Comp from './Navbar_Comp';

function FightClub() {
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
        <div className='ttr'
          style={{
            backgroundSize: 'cover',
            flex: '1',
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
          }}
        >
          
          <div style={{ flex: '1', marginRight: '30px', marginLeft: '200px' }}>
            <Card style={{ width: '50%' }}>
              <Card.Img
                variant="top"
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTEuNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379120-uzbnyvbdru-portrait.jpg"
                style={{ width: '100%', height: '400px' }}
              />
              <Card.Body>
                <Card.Title>About the movie</Card.Title>
                <Card.Text>
                Selva, a young vibrant college student who dreams to be a footballer is frustrated with life due to lack of opportunities. He grows into an angry young man who is drawn into conflicts involving him and his family
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ color: 'black', marginTop: '50px' }}>Fight Club</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ width: '23px', marginRight: '5px', marginTop: '20px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png" />
              <h5 style={{ color: 'black', margin: '0', cursor: 'pointer', marginTop: '20px' }}>7.2/10 5K Votes---></h5>
            </div>
            <div>
              <h5 className="border" style={{ color: 'black', padding: '10px', border: '30px', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>Add your ratings & reviews <button style={{ backgroundColor: 'yellow', cursor: 'pointer' }}>Rate now</button></h5>
            </div>
            <div>
              <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'black' }}>2D</button>
              <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'black' }}>Tamil</button>
            </div>
            <h5 style={{ color: 'blue', marginTop: '20px' }}>2h 18m . Action,Thriller . A .15 Dec,2023</h5>
            <Button style={{ backgroundColor: 'red', marginTop: '20px', width: '200px' }} variant="primary">
              Book Tickets
            </Button>
          </div>
        </div>
      </div>
    </div>


  );
}

export default FightClub;