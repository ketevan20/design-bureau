'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Can’t be empty")
    .matches(/^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/, "Enter a valid full name")
    .max(50, "Name can’t be longer than 50 characters"),
  email: Yup.string()
    .required("Can’t be empty")
    .email("Invalid email")
    .max(100, "Email can’t be longer than 100 characters"),
  message: Yup.string().required("Can’t be empty"),
});

const ContactForm = () => {
  return (
    <div className='p-6 w-[50%] max-w-135 border border-black bg-[#EEEEEE] 2xl:w-[40%]'>
      <Formik
        initialValues={{ name: "", email: "", message: "", category: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
        validationSchema={schema}
      >
        {({ errors, touched }) => (
          <Form className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <p className='text-[#949494] font-normal text-[12px] tracking-[30%] uppercase'>full name</p>
              <Field
                name="name"
                placeholder="type here..."
                className="border p-2 w-full bg-[#D8D8D8] text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
              />
              <ErrorMessage name="name" component="p" className="text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px]" />
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-[#949494] font-normal text-[12px] tracking-[30%] uppercase'>Email Address</p>
              <Field
                name="email"
                placeholder="email@example.com"
                className="border p-2 w-full bg-[#D8D8D8] placeholder:text-[#505050] text-[14px] font-normal tracking-[20%] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
              />
              <ErrorMessage name="email" component="p" className="text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px]" />
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-[#949494] font-normal text-[12px] tracking-[30%] uppercase'>
                Interested in
              </p>

              <Field
                as="select"
                name="category"
                className="border p-2 bg-[#D8D8D8] text-[14px] font-normal tracking-[20%] uppercase placeholder:text-[#505050]"
              >
                <option value="Architecture">Architecture</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Branding">Branding & Product Design</option>
              </Field>

              <ErrorMessage
                name="category"
                component="p"
                className="text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px]"
              />
            </div>

            <div>
              <p className='text-[#949494] font-normal text-[12px] tracking-[30%] uppercase'>Message</p>
              <Field
                as="textarea"
                name="message"
                placeholder="Tell us about your vision..."
                className="border p-2 w-full bg-[#D8D8D8] text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
              />
              <ErrorMessage name="message" component="p" className="text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px]" />
            </div>

            <button
              type="submit"
              className="py-5 bg-black text-white px-4 mt-2 text-[14px] font-normal tracking-[30%] uppercase hover:opacity-70"
            >
              Send inquiry
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm