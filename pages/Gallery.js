
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
              <img className="img-fluid" src="https://i.pinimg.com/564x/39/86/cb/3986cb17f4e847a8b22dcd511965c1fb.jpg" alt="Card image cap" />
        </div>
        <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/564x/c7/d9/0a/c7d90ae9dc45f9b17ab678c34a1f3e78.jpg" alt="Card image cap"/>
        </div>
        <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/564x/cf/2a/90/cf2a905b643120b24501bc5084446ab2.jpg" alt="Card image cap"/>
        </div>
        <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/564x/4e/32/66/4e3266ac79aba758c8a7c20050b86398.jpg" alt="Card image cap"d/>
        </div>
        <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/736x/12/ca/10/12ca10e260cca299a17b17cd417d92b5.jpg" alt="Card image cap"/>
        </div>
        <div className="col-md-4">
              <img className="img-fluid" src="https://i.pinimg.com/736x/f2/cd/a7/f2cda7b01a9c5eb2f70fa77944300ae5.jpg" alt="Card image cap"/>
            </div>
        </div>
        </main>
        <Footer />
      </div>
    )
  }