import { ProjectType } from '@/Types/Types';
import { Field, Form, Formik } from 'formik';
import { X } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react'
import * as Yup from 'yup';

type projectFormProps = {
    isOpen: boolean;
    project: ProjectType | null;
    setIsOpen: (isOpen: boolean) => void;
    setProjectToEdit: (project: ProjectType | null) => void;
}

const validationSchema = Yup.object({
    title: Yup.string()
        .required("Title is required"),
    subtitle: Yup.string()
        .max(70, "Subtitle must be 70 characters or less")
        .required("Subtitle is required"),
    year: Yup.number()
        .required("Year is required"),
    location: Yup.string()
        .required("Location is required"),
    category: Yup.string()
        .required("Category is required"),
    status: Yup.string()
        .required("Status is required"),
    program: Yup.string()
        .required("Program is required"),
    area: Yup.string()
        .required("Area is required"),
    description: Yup.string()
        .required("Short description is required"),
    text: Yup.string()
        .required("Detailed content is required"),
    mainImage: Yup.string()
        .required("Main image is required"),
    images: Yup.array()
        .min(2, "At least two images are required")
        .max(100, "maximum number of images is 100")
        .required("Images are required"),
});

const ProjectForm = ({ isOpen, setIsOpen, project, setProjectToEdit }: projectFormProps) => {
    if (!isOpen) return null;
    const [loading, setLoading] = useState(false);
    const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);


    return (
        <>
            <div className='absolute inset-0 bg-black opacity-30 z-1000'></div>
            <div className='fixed inset-0 z-50000 flex items-center justify-center' style={{backgroundColor: '#0e121b3e'}}>
                <div className='p-4 w-[90%] md:w-[50%] h-[90%] bg-white overflow-y-scroll relative'>
                    <div className='flex justify-between'>
                        <h1 className='font-cormorant font-bold text-xl'><span>{project ? "Edit" : "Create"}</span> project</h1>
                    </div>
                    <Formik
                        initialValues={{ title: project?.name || "", category: project?.category || "architecture", year: project?.year || "", subtitle: project?.subtitle || "", location: project?.location || "", mainImage: project?.url || '', mainImageFile: null, program: project?.program || "", status: project?.status || "completed", area: project?.area || "", description: project?.description || "", text: project?.text || "", images: project?.images || [] }}
                        onSubmit={async (values, { setSubmitting }) => {
                            setLoading(true);
                            try {
                                const formData = new FormData();

                                formData.append("name", values.title);
                                formData.append("subtitle", values.subtitle);
                                formData.append("location", values.location);
                                formData.append("year", String(values.year));
                                formData.append("category", values.category);
                                formData.append("program", values.program);
                                formData.append("status", values.status);
                                formData.append("area", String(values.area));
                                formData.append("description", values.description);
                                formData.append("text", values.text);

                                if (values.mainImageFile) {
                                    formData.append("coverImage", values.mainImageFile);
                                }

                                const newImages = values.images.filter((img: any) => img.file);
                                newImages.forEach((img: any) => {
                                    formData.append("images", img.file);
                                });

                                const url = project
                                    ? `/api/admin/teamMembers/${project._id}`
                                    : "/api/admin/teamMembers";

                                const method = project ? "PATCH" : "POST";

                                const res = await fetch(url, { method, body: formData });

                                const data = await res.json();

                                if (res.status === 409) {
                                    alert("A project with this name already exists.");
                                    return;
                                }

                                if (!res.ok) {
                                    alert(data.message || "Something went wrong.");
                                    return;
                                }

                                await Promise.all(
                                    imagesToDelete.map(imageId =>
                                        fetch(`/api/admin/projects/${project!._id}/images/${imageId}`, {
                                            method: "DELETE"
                                        })
                                    )
                                );

                                setIsOpen(false);
                                setProjectToEdit(null);
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
                                            setProjectToEdit(null);
                                        }
                                    } else {
                                        setIsOpen(false);
                                        setProjectToEdit(null);
                                    }
                                }} className='absolute right-4 top-4 hover:opacity-50 cursor-pointer'><X /></button>

                                <Form className='w-full mt-8 flex flex-col gap-4'>
                                    <div>
                                        <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>Title</p>
                                        <Field
                                            name="title"
                                            placeholder="type here..."
                                            className="border p-2 w-full text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                        />
                                        {touched.title && errors.title && (
                                            <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.title as string}</p>
                                        )}
                                    </div>
                                    <div>
                                        <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>subtitle</p>
                                        <Field
                                            name="subtitle"
                                            placeholder="type here..."
                                            className="border p-2 w-full text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                        />
                                        {touched.subtitle && errors.subtitle && (
                                            <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.subtitle as string}</p>
                                        )}
                                    </div>
                                    <div className='flex gap-4 justify-between'>
                                        <div className='flex-1'>
                                            <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>year</p>
                                            <Field
                                                name="year"
                                                type='number'
                                                placeholder="type here..."
                                                className="border p-2 w-full text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                            />
                                            {touched.year && errors.year && (
                                                <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.year as string}</p>
                                            )}
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>Location</p>
                                            <Field
                                                name="location"
                                                placeholder="E.g Tbilisi, Georgia"
                                                className="border p-2 w-full text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                            />
                                            {touched.location && errors.location && (
                                                <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.location as string}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className='flex gap-4 justify-between'>
                                        <div className='flex-1'>
                                            <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>category</p>
                                            <Field
                                                as="select"
                                                name="category"
                                                className="w-full border p-2 text-[14px] font-normal tracking-[20%] uppercase placeholder:text-[#505050]"
                                            >
                                                <option value="architecture">Architecture</option>
                                                <option value="interior">Interior Design</option>
                                                <option value="product-design">Product Design</option>
                                            </Field>
                                            {touched.category && errors.category && (
                                                <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.category as string}</p>
                                            )}
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>status</p>
                                            <Field
                                                as="select"
                                                name="status"
                                                className="w-full border p-2 text-[14px] font-normal tracking-[20%] uppercase placeholder:text-[#505050]"
                                            >
                                                <option value="in-progress">In progress</option>
                                                <option value="completed">Completed</option>
                                                <option value="upcoming">Upcoming</option>
                                            </Field>
                                            {touched.status && errors.status && (
                                                <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.status as string}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className='flex gap-4 justify-between'>
                                        <div className='flex-1'>
                                            <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>Program</p>
                                            <Field
                                                name="program"
                                                placeholder="E.g commercial"
                                                className="border p-2 w-full text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                            />
                                            {touched.program && errors.program && (
                                                <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.program as string}</p>
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
                                    </div>
                                    <div>
                                        <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>Area</p>
                                        <Field
                                            name="area"
                                            placeholder="type here..."
                                            className="border p-2 w-full text-[14px] font-normal tracking-[20%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                        />
                                        {touched.area && errors.area && (
                                            <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.area as string}</p>
                                        )}
                                    </div>
                                    <div>
                                        <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>Short Description</p>
                                        <Field
                                            as="textarea"
                                            name="description"
                                            rows={3}
                                            placeholder="type here..."
                                            className="border p-2 w-full text-[14px] font-normal tracking-[2%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px] resize-none"
                                        />
                                        {touched.description && errors.description && (
                                            <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.description as string}</p>
                                        )}
                                    </div>
                                    <div>
                                        <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>Detailed Content</p>
                                        <Field
                                            as="textarea"
                                            name="text"
                                            rows={6}
                                            placeholder="type here..."
                                            className="border p-2 w-full text-[14px] font-normal tracking-[2%] placeholder:text-[#505050] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[12px]"
                                        />
                                        {touched.text && errors.text && (
                                            <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.text as string}</p>
                                        )}
                                    </div>
                                    <div>
                                        <p className='text-[10px] tracking-[20%] opacity-70 uppercase mb-1'>Images</p>
                                        <label className="flex items-center justify-center p-1 cursor-pointer bg-black text-white w-fit px-4">
                                            <span className="text-[12px] uppercase tracking-widest">Add Images</span>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                className="hidden"
                                                onChange={(e) => {
                                                    const files = Array.from(e.currentTarget.files || []);
                                                    const previews = files.map(file => ({
                                                        url: URL.createObjectURL(file),
                                                        key: '',
                                                        _id: crypto.randomUUID(),
                                                        file,
                                                    }));
                                                    setFieldValue("images", [...(values.images || []), ...previews]);
                                                }}
                                            />
                                        </label>
                                        {values.images && values.images.length > 0 && (
                                            <div className='flex flex-wrap gap-2 mt-3'>
                                                {values.images.map((img: any, index: number) => (
                                                    <div key={img._id} className='relative group'>
                                                        <img src={img.url} className='w-20 h-20 object-cover' />
                                                        <button
                                                            type="button"
                                                            onClick={async () => {
                                                                const imgToRemove = values.images[index];
                                                                setFieldValue("images", values.images.filter((_: any, i: number) => i !== index));

                                                                if (!imgToRemove.file && project) {
                                                                    setImagesToDelete(prev => [...prev, imgToRemove._id]);
                                                                }
                                                            }}
                                                            className='absolute top-0 right-0 bg-black text-white w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'
                                                        >
                                                            <X size={10} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {touched.images && errors.images && (
                                            <p className='text-[#b04b4b] font-normal tracking-[10%] uppercase text-[10px] mt-1'>{errors.images as string}</p>
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

export default ProjectForm