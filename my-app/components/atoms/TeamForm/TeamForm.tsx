import { TeamMemberType } from '@/Types/Types';
import { Field, Form, Formik } from 'formik';
import { X } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react'
import * as Yup from 'yup';


type TeamFormProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    member: TeamMemberType | null;
    setMember: (member: TeamMemberType | null) => void;
}

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Fullname is required"),
    position: Yup.string()
        .required("position is required")
        .max(20, 'position must be shorter than or equal to 20 characters'),
    expertise: Yup.string()
        .required("expertise is required"),
    location: Yup.string()
        .required("location is required"),
    mainImage: Yup.string()
        .required("Main image is required")
});

const TeamForm = ({ isOpen, setIsOpen, member, setMember }: TeamFormProps) => {
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    return (
        <>
            <div className='fixed inset-0 z-50000 flex items-center justify-center' style={{ backgroundColor: '#0e121b3e' }}>
                <div className='h-auto max-h-[90%] p-4 w-[90%] md:w-[50%] bg-white relative overflow-y-scroll'>
                    <div className='flex justify-between'>
                        <h1 className='font-cormorant font-bold text-xl'><span>{member ? "Edit " : "Add new "}</span>team member</h1>
                    </div>
                    <Formik
                        initialValues={{ name: member?.name || '', position: member?.position || '', expertise: member?.expertise || '', location: member?.location || '', mainImage: member?.url || '', mainImageFile: null }}
                        onSubmit={async (values, { setSubmitting }) => {
                            setLoading(true);
                            try {
                                const formdata = new FormData();
                                formdata.append("name", values.name);
                                formdata.append("position", values.position);
                                formdata.append("expertise", values.expertise);
                                formdata.append("location", values.location);

                                if (values.mainImageFile) {
                                    formdata.append("file", values.mainImageFile);
                                }

                                const url = member
                                    ? `/api/admin/teamMembers/${member._id}`
                                    : "/api/admin/teamMembers";

                                const method = member ? 'PATCH' : 'POST';

                                const res = await fetch(url, { method: method, body: formdata });
                                const data = await res.json();

                                if (res.status === 409) {
                                    alert("A member with this name already exists.");
                                    return;
                                }

                                if (!res.ok) {
                                    alert(data.message || "Something went wrong.");
                                    return;
                                }

                                setIsOpen(false);
                                setMember(null);
                                window.location.reload();
                            } catch (error) {
                                console.error(error);
                            } finally {
                                setLoading(false);
                                setSubmitting(false);
                            }
                        }}
                        validationSchema={validationSchema}
                    >
                        {({ errors, touched, values, setFieldValue, dirty }) => (
                            <>
                                <button onClick={() => {
                                    if (dirty) {
                                        if (confirm("You have unsaved changes. Discard them?")) {
                                            setIsOpen(!isOpen);
                                            setMember(null);
                                        }
                                    } else {
                                        setIsOpen(false);
                                        setMember(null);
                                    }
                                }} className='absolute right-4 top-4 hover:opacity-50 cursor-pointer'><X /></button>

                                <Form className='w-full mt-8 flex flex-col gap-4'>
                                    <div>
                                        <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>Full Name</p>
                                        <Field
                                            name="name"
                                            placeholder="type here..."
                                            className="border p-2 w-full text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                        />
                                        {touched.name && errors.name && (
                                            <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.name as string}</p>
                                        )}
                                    </div>
                                    <div className='flex gap-4 justify-between'>
                                        <div className='flex-1'>
                                            <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>position</p>
                                            <Field
                                                name="position"
                                                placeholder="type here..."
                                                className="border p-2 w-full text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                            />
                                            {touched.position && errors.position && (
                                                <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.position as string}</p>
                                            )}
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>expertise</p>
                                            <Field
                                                name="expertise"
                                                placeholder="type here..."
                                                className="border p-2 w-full text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                            />
                                            {touched.expertise && errors.expertise && (
                                                <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.expertise as string}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>location</p>
                                        <Field
                                            name="location"
                                            placeholder="type here..."
                                            className="border p-2 w-full text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                        />
                                        {touched.location && errors.location && (
                                            <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.location as string}</p>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] tracking-[20%] opacity-70 uppercase mb-1">
                                            Main Image
                                        </p>

                                        <label className="flex items-center justify-center p-1 cursor-pointer bg-black text-white">
                                            <span className="text-[12px] uppercase tracking-widest">
                                                Choose File
                                            </span>

                                            <input
                                                type="file"
                                                name="mainImage"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.currentTarget.files?.[0];
                                                    if (file) {
                                                        setFieldValue("mainImageFile", file);
                                                        setFieldValue("mainImage", URL.createObjectURL(file));
                                                    }
                                                }}
                                            />
                                        </label>
                                        {values.mainImage && (
                                            <img src={values.mainImage} className='w-15 h-15 mt-3 object-cover' />
                                        )}
                                        {touched.mainImage && errors.mainImage && (
                                            <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.mainImage as string}</p>
                                        )}
                                    </div>
                                    <button type='submit' className='bg-black cursor-pointer text-white text-[12px] uppercase tracking-widest py-2 mt-5 disabled:opacity-50 hover:opacity-70' disabled={!dirty}>
                                        {
                                            loading ?
                                                <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity }} className="m-auto relative w-7 h-7">
                                                    <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/20 via-white to-white/20 blur-sm" />
                                                    <div className="absolute inset-1 rounded-full bg-black" />
                                                </motion.div> : 'Save Project'
                                        }
                                    </button>
                                </Form>
                            </>
                        )}
                    </Formik>
                </div>
            </div>


        </>
    )
}

export default TeamForm