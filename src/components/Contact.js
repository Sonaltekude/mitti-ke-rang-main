import React from 'react'

export const Contact = () => {
  return (
    <>

      <section id="contact" class="contact py-3 bg-light">
        <div class="container ">
          <h2 class="text-center mb-5 text-success">Contact Us</h2>
          <div class="row">

            <div class="col-lg-6 mb-4">
              <form action="submit_form.php" method="POST">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" id="name" name="name" class="form-control" required />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" id="email" name="email" class="form-control" required />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea id="message" name="message" class="form-control" required></textarea>
                </div>
                <button type="submit" class="btn btn-success">Send Message</button>
              </form>
            </div>


            <div className="col-lg-6">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5649.741074097785!2d73.8092172299815!3d18.579326419552906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8cecb206ac1%3A0x1f636eef55f8ac8b!2sNew%20Sangavi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1731651425078!5m2!1sen!2sin"
                  width="100%"
                  height="350px"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}


