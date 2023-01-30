const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>
      <form action="#" method="post">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;