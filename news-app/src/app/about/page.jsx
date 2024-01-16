import Head from "next/head";
import "./about.modules.css";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - Binar News</title>
        <meta name="description" content="Learn more about our company and our mission." />
      </Head>

      <main className="about-container">
        <section className="about-section">
          <h1>About Us</h1>

          <p>
            Welcome to Binar News where we are committed to providing exceptional services and solutions to our clients. With a passion for innovation and a dedication to excellence, we strive to make a positive impact in the digital world.
          </p>

          <p>At Binar News we believe in the power of technology to transform businesses and improve lives. Our team of skilled professionals is dedicated to delivering cutting-edge solutions that meet the unique needs of our clients.</p>

          <p>Whether you are a small startup or a large enterprise, we are here to collaborate with you and bring your ideas to life. Our goal is to create digital experiences that not only meet but exceed your expectations.</p>
        </section>
      </main>
    </div>
  );
};

export default About;
