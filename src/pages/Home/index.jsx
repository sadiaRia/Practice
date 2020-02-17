import React, { Component } from 'react';
import img from '../../images/Lavender-Sunset.jpg';
import offer from '../../images/offer.png';
import sale from '../../images/sale.jpg';
import _ from "lodash";
import upcomingCollection from '../../images/comming.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello!',
      providedServiceList: [
        {
          imageLink: offer,
          title: '',
          descriptiom: ''
        },
        {
          imageLink: sale,
          title: '',
          descriptiom: ''

        }, {
          imageLink: upcomingCollection,
          title: '',
          descriptiom: ''

        }]
    };
  }
  // WARNING: this syntax is experimental!
  // Using an arrow here binds the method:
  handleClick = () => {
    alert(this.state.message);
  }

  render() {
    const { providedServiceList } = this.state;
    return (
      <div>
        <div className='container' style={{ margin: '0px', border: '0px', padding: '0px' }}>
          <img src={img} alt="" width="1450" height="469" style={{ padding: '0px', margin: '0px' }} />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12'><br /></div>
            <div className='col-2'></div>
            <div className='col-8' style={{ color: 'purple', fontSize: '25px', fontWeight: 'bold' }}>WE know SHOPPING makes you happier</div>
            <div className='col-2'></div>
            <div className='col-12'><br /></div>
            {/* <div className='col-12' style={{padding:'0px',margin:'0px',textAlign:'left',color:'#800080',fontSize:'30px'}}>Our Stroy</div> */}
            {_.map(providedServiceList, (service, index) => (
              <div className='col-4' >
                <div class="card" style={{ width: '22rem' }}>
                  <img src={service.imageLink} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div> </div>))}
                <div className='col-12'><br /></div>
                <div className='col-12'><br /></div>
                <div className='col-6' style={{color:'purple',fontSize:'50px'}}>OUR STORY</div>

                <div className='col-6' style={{color:'black',font:'12px'}}>
                Website.com began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage. <br/><br/><br/>
                We created the Website.com Site Builder with the user's perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand, or start selling products right away.



                </div>


          </div>
        </div>
      </div>
    );
  }
}
export default Home; 
