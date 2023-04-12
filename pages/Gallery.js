
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Gallery() {
    return (
      <div class="container">
      <div className="header">
      <title>Gallery</title>
      <Navbar />
    </div>
        <main>
        <Header title="Gallery" />
        <div className="row">
            <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/564x/cb/a3/32/cba33262a6f76b23ac1ec97831280e18.jpg" alt="Card image cap"   data-size="1600x1067"/>
        </div>
        <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/564x/c7/d9/0a/c7d90ae9dc45f9b17ab678c34a1f3e78.jpg" alt="Card image cap"data-size="1600x1067"/>
        </div>
        <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/564x/91/cb/c9/91cbc9a3e13116f1b3e1ba77a43de0a9.jpg" alt="Card image cap"data-size="1600x1067"/>
        </div>
        <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/564x/26/95/d2/2695d286bfe8e945eb627e30d4cf4d35.jpg" alt="Card image cap"data-size="1600x1067"/>
        </div>
        <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/736x/12/ca/10/12ca10e260cca299a17b17cd417d92b5.jpg" alt="Card image cap"data-size="1600x1067"/>
        </div>
        <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/736x/f2/cd/a7/f2cda7b01a9c5eb2f70fa77944300ae5.jpg" alt="Card image cap"data-size="1600x1067"/>
            </div>
        </div>
        </main>
        <Footer />
      </div>
    )
  }