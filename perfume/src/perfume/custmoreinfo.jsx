import Image from 'react-bootstrap/Image';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact(){
return(
    <>
    
  <section id="both">
 <section id="you">
    
      <Col xs={9} md={7} >
          <Image src="/public/p/perfume1.jpg" thumbnail  className='col'/>
        </Col>
        
       <div >
        
       <div id="contact">
        <label htmlFor="contact">
      <h1 id="me">  Contact_Us <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg></h1></label></div>
 <div id='div'>
       <h4> Name:Saron Zeleke</h4>
        <p>Tel: +251929535765</p>
        <p >Email: sharonkuye369@gmail.com</p>
        <div >
     <a href="https://saron Zeleke/facebook.com">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16" id="a1">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>Our-Facebook Page
     </a>
 </div>
 <div >
   <a href="https://@sakuzas/telegram.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16" id='a2'>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
</svg>Telgram</a>
 </div>
 <div >
   <a    href="https://Cassiopiaku/tiktok.com"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16" id='a3'>
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg>Tiktok</a>
 </div>
 
        <div className="mb-3 mt-3">
      <label htmlFor="comment" >Comments:</label>
      <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    </div>
    
        </section>
  
        <section id='section'>
  <Form className='text-center '> 
     <h1>Sign Up</h1>
   <Row className="mb-3 w-50px">

     <Form.Group as={Col} controlId="formGridEmail">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" placeholder="Enter email" />
     </Form.Group>

     <Form.Group as={Col} controlId="formGridPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password"  />
     </Form.Group>
   </Row>

   <Form.Group className="mb-3" controlId="formGridAddress1">
     <Form.Label>Address</Form.Label>
     <Form.Control placeholder="1234 Main St" />
   </Form.Group>

  

   <Row className="mb-3">
     <Form.Group as={Col} controlId="formGridCity">
       <Form.Label>City</Form.Label>
       <Form.Control id='f4'/>
     </Form.Group>

     <Form.Group as={Col} controlId="formGridState">
       <Form.Label>State</Form.Label>
       <Form.Select defaultValue="Choose...">
         <option>USA</option>
         
         <option>Israel</option>
         <option>Europe</option>
         <option>Australia</option>
         <option>Ethiopia</option>
        
       </Form.Select>
     </Form.Group>

   </Row>

   <Form.Group className="mb-3" id="formGridCheckbox">
     <Form.Check type="checkbox" label="Check me out" />
   </Form.Group>

   <Button variant="primary" type="submit">
     Submit
   </Button>
 </Form>

</section>
</section>









  
    </>
)
}export default Contact