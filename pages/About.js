import Head from 'next/head'
import Navbar from '@components/Navbar'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
      <div className="container">
      <Head>
        <title>About</title>
        <Navbar />
      </Head>
        <main>
        <Header title="About Us" />
            <div className="row">
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
        </main>
        <Footer />
      </div>
    )
  }