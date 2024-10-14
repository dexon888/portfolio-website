import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const serviceID = 'service_s8mdv82';
      const templateID = 'template_4ohnqk7';
      const userID = '_e7xgfLNmbI76dDy4';

      try {
        await emailjs.send(
          serviceID,
          templateID,
          { name: values.name, email: values.email, message: values.message },
          userID
        );
        alert('Message sent successfully!');
        resetForm();
      } catch (error) {
        console.error('Failed to send message. Error:', error);
        alert('Failed to send message. Please try again later.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-gray-800">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
        />
        {formik.touched.name && formik.errors.name && <p className="text-red-500 text-xs italic">{formik.errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
        />
        {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs italic">{formik.errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Your message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
        ></textarea>
        {formik.touched.message && formik.errors.message && <p className="text-red-500 text-xs italic">{formik.errors.message}</p>}
      </div>

      <div className="flex items-center justify-between">
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;