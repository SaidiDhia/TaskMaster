import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mt-5">
      <h1 style={{ color: '#3c009d', fontSize: '48px', fontWeight: 700, textDecoration: 'underline' }}>About</h1>
      <section>
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us through any of the following:</p>
        <ul className="list-group">
          <li className="list-group-item">Email: TaskMaster@pfa.com</li>
          <li className="list-group-item">Phone: 95-300-026</li>
          <li className="list-group-item">Address: 699  FSB, jarzouna, Bizerte</li>
        </ul>
      </section>
      <section>
        <h2>Our Team</h2>
        <p>Saidi Dhia---------------------<span style={{ color: '#4c00b4',fontWeight: 'bold' }}>Email: </span>saididhia13@gmail.com</p>
        <p>Aouadi Louay-----------------<span style={{ color: '#4c00b4',fontWeight: 'bold' }}>Email: </span>aouadilouayy@gmail.com</p>
        <p>Ben Salah Melik---------------<span style={{ color: '#4c00b4',fontWeight: 'bold' }}>Email: </span>melikbensalah@gmail.com</p>
        <p>Zribi Roua---------------------<span style={{ color: '#4c00b4',fontWeight: 'bold' }}>Email: </span> rouazribi789@gmail.com</p>

      </section>
    </div>
  );
};

export default AboutPage;
