
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

function About(){
return(
    <>
    <section id="abouts">
    <h1 className='text-center'>About_us</h1>
    <section id="wo">
    
      <Col xs={7} md={5}>
        <Image src=" /public/p/pu/a.jpeg" thumbnail id='img'/>
        </Col>
        <div className="card-body">
    <p className="card-text">
   

<div  id="us"><p id='p'>We are a passionate team dedicated to bringing you the best in online shopping. With a focus on quality, convenience, and customer satisfaction, we offer a wide range of products tailored to meet your needs.

Our mission is to provide an exceptional shopping experience through innovation, reliable service, and a commitment to excellence. Join us as we continue to grow and deliver the products you love!</p>

  </div>

      
    </p>
  </div>

 
  <div className="card bg-black text-white" id='us2'>
  
  <Col xs={6} md={6}>
                <Image src="/public/p/victria perfume.jpg" thumbnail />
            </Col>
  <div className="card-body">
    <p className="card-text">

 <h1 className='text-center'>our mishion</h1>
<div id="us2">
<p id='p1' >To provide our customers with exceptional products and a seamless shopping experience. We are committed to delivering quality, convenience, and outstanding customer service, ensuring that every purchase brings satisfaction and value. Our goal is to build lasting relationships through trust, innovation, and dedication to excellence.
</p>
</div>

      
    </p>
  </div>
</div>
  </section>
  <h1 className='text-center'>Why You Choose_Us</h1>
  <div id="m">
 
  <section id="c">
  
<div className="card bg-black text-white" >

<Col xs={6} md={6}>
                <Image src="/public/p/p/n.jpg" id='i' thumbnail/>
            </Col>
            
  <div className="card-body">
    <p className="card-text">

   
       <h2 >1.Quality Assurance</h2>
     <p id='p2'> At Kunas Perfume, we prioritize quality. We source our products from reputable brands and ensure that every bottle meets our high standards. Our commitment to authenticity means you can shop with confidence, knowing you’re getting genuine products.</p>

      
    </p>
  </div>
</div>




    <div className="card bg-black text-white" >
  
  <Col xs={6} md={6}>
                <Image src="/public/p/perfume3.jpg" id='i1'thumbnail />
            </Col>
  <div className="card-body">
    <p className="card-text">

   
    <h2 > 2.Exclusive Offers:</h2>
    <p id='p3'> We believe in rewarding our loyal customers. With regular promotions, exclusive discounts, and loyalty programs, shopping at Kunas Perfume not only gets you the best fragrances but also great value for your money.</p>
      
    </p>
  </div>
</div>

  </section>
  
  </div>

   

  

  <div className="card   bg-black text-white" id='card' >
      
      <div className="card-body ">
    
      <Row>
         <Col xs={6} md={6}>
             <Image src="/public/p/perfumeking.jpg" thumbnail />
         </Col>
         <Col xs={6} md={6}>
             <Image src="/public/p/perfume2.jpg" thumbnail />
         </Col>
     </Row>
     <div className='text-center '>
     <h3 className="card-title ">Ku</h3>
        <p className="card-text  ">Make Your Day With Us 🥰</p>
       <a href="#yeswa" className="btn btn-primary ">Order!</a>
     </div>
   
        
       </div>
 </div>



    
    </section>
   
 </>
    
)
}
export default About