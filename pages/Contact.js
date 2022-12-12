import React from "react";
import { useFormik } from "formik";
import style from "../styles/Contact.module.css";
import * as Yup from "yup";
import Image from "next/image";
import react from "../components/asset/react.svg";

function contact() {

    const onSubmit = (e) => {
        e.preventDefault();
        
      };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      select: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Must be 25 charecters or less")
        .required("Required"),
      email: Yup.string().max(20, "Invalid email address").required("Required"),
      phone: Yup.number().max(10, "Must be 10 digits").required("Required"),
      message: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
        select: Yup.string()
        .max("Select One")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);
  return (
    <div className={style.container_contact}>
      <div className={style.heading_container}>
         <Image
            className={style.cover_img}
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={react}
            alt=""
          />
      </div>
      <div className={style.contact_form}>
        {/* <p className={style.contact_heading}>Contact us</p> */}
        {/* <form onSubmit={formik.handleSubmit}> */}
        <form onSubmit={onSubmit}>
          <div className={style.input_box}>
            <label className={style.label}>Full name*</label>
            <input
              id="name"
              name="name"
              type="text"
              className={style.input}
              placeholder="Dusti bun"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className={style.errors}>{formik.errors.name}</p>
            ) : null}
          </div>
          <div className={style.input_box}>
            <label className={style.label}>Email*</label>
            <input
              id="email"
              name="email"
              type="email"
              className={style.input}
              placeholder="test@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className={style.errors}>{formik.errors.email}</p>
            ) : null}
          </div>
          <div className={style.input_box}>
            <label className={style.label}>Message?*</label>
            <textarea
              id="message"
              name="message"
              type="text"
              className={style.textarea}
              placeholder="Type your message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.messsage}
            />
            {formik.touched.message && formik.errors.message ? (
              <p className={style.errors}>{formik.errors.message}</p>
            ) : null}
          </div>
          <div className={style.submit_container}>
            <button type="submit" className={style.submit_button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default contact;
