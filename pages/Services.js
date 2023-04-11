import Head from 'next/head'
import Navbar from '@components/Navbar'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Service() {
    return (
      <div className="container">
      <Head>
        <title>Services</title>
        <Navbar />
      </Head>
        <main>
        <Header title="Our Services" />
        <div className="row">
          <div className="col-md">
            <h3>Artidicial Nails</h3>
          <ul className="list-group">
           <li className="list-group-item">Acrylic Full Set</li>
           <li className="list-group-item">Acrylic Refill</li>
           <li className="list-group-item">Bio-Gel Full Set</li>
           <li className="list-group-item">Bio-Gel Refill</li>
           <li className="list-group-item">Power Color Full Set</li>
           <li className="list-group-item">Power Color Refill</li>
           <li className="list-group-item">Dipping Power Full Set</li>
           <li className="list-group-item">Dipping Power Refill</li>
          </ul>
          </div>
          <div className="col-md">
          <h3>Natural Nails Care</h3>
          <ul className="list-group">
           <li className="list-group-item">Signature Manicure</li>
           <li className="list-group-item">Signature Pedicure</li>
           <li className="list-group-item">Signature Mani & Pedi</li>
           <li className="list-group-item">Mini Mani & Pedi</li>
          </ul>
          </div>
          <div className="col-md">
          <h3>Waxing</h3>
          <ul Name="list-group">
           <li className="list-group-item">Eyebrows</li>
           <li className="list-group-item">Upper Lip</li>
           <li className="list-group-item">Chin</li>
           <li className="list-group-item">Full Face</li>
           <li className="list-group-item">Under Arm</li>
           <li className="list-group-item">Back</li>
           <li className="list-group-item">Full Legs</li>
           <li className="list-group-item">Half Legs</li>
           <li className="list-group-item">Full Arms</li>
           <li className="list-group-item">Half Arms</li>
           <li className="list-group-item">Shoulder</li>
           <li className="list-group-item">Bikini</li>
          </ul>
          </div>
        </div>
        </main>
        <Footer />
      </div>
    )
  }
  