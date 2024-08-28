import styles from './ContactStyles.module.css';
import emailjs from 'emailjs-com';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_p6oy4fp', e.target, 'BxUKNU-hoAJKuUnfR')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message, please try again later.');
      });
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
