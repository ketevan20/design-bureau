'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { motion } from 'motion/react';
import React, { useState } from 'react'
import * as Yup from "yup";

const schema = Yup.object().shape({
  fullName: Yup.string()
    .required("Can’t be empty")
    .max(50, "Name can’t be longer than 50 characters"),
  email: Yup.string()
    .required("Can’t be empty")
    .email("Invalid email")
    .max(100, "Email can’t be longer than 100 characters"),
  message: Yup.string().required("Can’t be empty"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <div className='py-12 px-6 w-full sm:w-[60%] md:w-[50%] max-w-135 border border-black bg-[#EEEEEE] 2xl:w-[40%]'>
      {success ?
        <div className='flex flex-col gap-4 items-start justify-center h-full p-6'>
          <div className='text-center flex flex-col gap-4'>
            <h1 className='font-cormorant font-bold text-2xl'>Message Sent</h1>
            <p className='text-[12px] tracking-[20%]'>Thank you for reaching out. We'll get back to you shortly.</p>
            <button onClick={() => setSuccess(false)} className='uppercase tracking-[20%] font-semibold text-[12px] underline cursor-pointer hover:opacity-60'>Send Another</button>
          </div>
        </div> :
        <Formik
          initialValues={{ fullName: "", email: "", message: "", interestedIn: "architecture" }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              setLoading(true);
              const res = await fetch("/api/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });

              const data = await res.json();

              if (!res.ok) {
                const msg = data.message;
                alert(Array.isArray(msg) ? msg.join("\n") : msg || "Something went wrong");
              }

              resetForm();
              setLoading(false);
              window.scrollTo(0,0);
              setSuccess(true);
            } catch (error) {
              alert("Network error. Please try again.");
            } finally {
              setSubmitting(false);
              setLoading(false);
            }
          }}
          validationSchema={schema}
        >
          {({ errors, touched }) => (
            <Form className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <p className='text-[#949494] font-normal text-[12px] tracking-[30%] uppercase'>full name</p>
                <Field
                  name="fullName"
                  placeholder="type here..."
                  className="border p-2 w-full bg-[#D8D8D8] text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                />
                <ErrorMessage name="fullName" component="p" className="text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px]" />
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
                  name="interestedIn"
                  className="border p-2 bg-[#D8D8D8] text-[14px] font-normal tracking-[20%] uppercase placeholder:text-[#505050]"
                >
                  <option value="architecture">Architecture</option>
                  <option value="interior">Interior Design</option>
                  <option value="product-design">Product Design</option>
                </Field>

                <ErrorMessage
                  name="interestedIn"
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
                {
                  loading ?
                    <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity }} className="m-auto relative w-7 h-7">
                      <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/20 via-white to-white/20 blur-sm" />
                      <div className="absolute inset-1 rounded-full bg-black" />
                    </motion.div> : 'Send Inquiry'
                }
              </button>
            </Form>
          )}
        </Formik>
      }
    </div>
  )
}

export default ContactForm