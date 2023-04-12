
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Table from '@components/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container">
    <div className="header">
      <title>Home</title>
      <Navbar />
    </div>
      <main>
      <div className="bg-img">
      <img src="https://nail-issimo.com/wp-content/uploads/2017/12/manicures-billings-mt.jpg" className="img-fluid" alt="Wild Landscape" />
       </div>
       <div className="row">
          <h1>About Us</h1>
              <div className="col">
              <img className="img-fluid" src="https://i.pinimg.com/564x/fc/be/a5/fcbea5d3523297ef2191ac35678bf37b.jpg" alt="Card image cap"/>
              </div>
              <div className="col">
                  <p>
                  KNT Nails & Spa is a first-class Relaxation and Beauty Nails Spa that promotes comfort, beauty, well-being, and health.
Our staff was trained to follow a proper sanitization protocol that puts our customer’s cleanliness as the number one priority.
                  </p>
                  <a className="btn text-white btn-dark"  href="/Contact" role="button">Contact Now</a>
              </div>
          </div>
       <div class="row">
          <h1>Gallery</h1>
          <div className="gallery">
          <div className="mb-3">
            <img className="img-fluid" src="https://i.pinimg.com/564x/cb/a3/32/cba33262a6f76b23ac1ec97831280e18.jpg" alt="Card image cap"/>
      </div>
      <div className="mb-3">
            <img className="img-fluid" src="https://i.pinimg.com/564x/c7/d9/0a/c7d90ae9dc45f9b17ab678c34a1f3e78.jpg" alt="Card image cap"/>
      </div>
      <div className="mb-3">
            <img className="img-fluid" src="https://i.pinimg.com/564x/91/cb/c9/91cbc9a3e13116f1b3e1ba77a43de0a9.jpg" alt="Card image cap"/>
      </div>
      <div className="mb-3">
            <img className="img-fluid" src="https://i.pinimg.com/564x/26/95/d2/2695d286bfe8e945eb627e30d4cf4d35.jpg" alt="Card image cap"/>
      </div>
      <div className="mb-3">
            <img className="img-fluid" src="https://i.pinimg.com/736x/12/ca/10/12ca10e260cca299a17b17cd417d92b5.jpg" alt="Card image cap"/>
      </div>
      <div className="mb-3">
            <img className="img-fluid" src="https://i.pinimg.com/736x/f2/cd/a7/f2cda7b01a9c5eb2f70fa77944300ae5.jpg" alt="Card image cap"/>
          </div>
      </div>
      </div>
       <h1>Our Employee</h1>
       <Table />
      
      </main>
      <Footer />
    </div>
  )
}
