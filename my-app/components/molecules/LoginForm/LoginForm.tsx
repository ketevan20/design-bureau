'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { motion } from 'motion/react';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Can’t be empty")
    .email("Invalid email")
    .max(100, "Email can’t be longer than 100 characters"),
  password: Yup.string()
    .required("Can’t be empty")
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (
    values: { email: string; password: string }
  ) => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      router.push("/admin/dashboard");
    } catch (error: any) {
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-[#F2F0EF]'>
      <div className='px-6 py-12 w-[90%] sm:w-[50%] max-w-105 border border-black bg-[#EEEEEE] 2xl:w-[40%]'>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className='flex flex-col gap-5'>

              <div className='flex flex-col gap-2'>
                <p className='text-[#949494] font-normal text-[12px] tracking-[30%] uppercase'>Email</p>
                <Field
                  name="email"
                  placeholder="email@example.com"
                  className="border p-2 w-full bg-[#D8D8D8] text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                />
                <ErrorMessage name="email" component="p" className="text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px]" />
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-[#949494] font-normal text-[12px] tracking-[30%] uppercase'>Password</p>
                <Field
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="border p-2 w-full bg-[#D8D8D8] text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                />
                <ErrorMessage name="password" component="p" className="text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px]" />
              </div>

              <button
                type="submit"
                className="py-5 bg-black text-white px-4 mt-2 text-[14px] font-normal tracking-[30%] uppercase hover:opacity-70"
              >
                {loading ?
                  <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity }} className="m-auto relative w-7 h-7">
                    <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/20 via-white to-white/20 blur-sm" />
                    <div className="absolute inset-1 rounded-full bg-black" />
                  </motion.div>
                  : 'Sign In'}
              </button>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default LoginForm