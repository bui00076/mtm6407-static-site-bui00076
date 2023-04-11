import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
      <div className="container">
      <Head>
        <title>Contact</title>
        <Navbar />
      </Head>
        <main>
  
<section className="mb-4">

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>


    <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">


                    <div clasNames="col-md-6">
                        <div className="md-form mb-0">
                           <label for="name" className="">Your name</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label for="email" className="">Your email</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                            
                        </div>
                    </div>


                </div>
  
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                        <label for="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            
                        </div>
                    </div>
                </div>


 
                <div className="row">

                    <div className="col-md-12">

                        <div className="md-form">
                        <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        
                        </div>

                    </div>
                </div>

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-dark" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>

        


    </div>

</section>


        </main>
        <Footer />
      </div>
    )
  };