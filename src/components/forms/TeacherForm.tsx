"use client";

import { z } from "zod";

const schema = z.object({
    userName: z
        .string()
        .min(3, { message: 'Username must be at least 3 characters long!' })
        .max(20, { message: 'Username must be at most 20 characters long!' }),
    email: z.string().email({ message: 'Invalid email address!' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long!' })
        .max(50, { message: 'Password must be at most 50 characters long!' }),
    firstName: z.string().min(1, { message: 'First name is required!' }),
    lastName: z.string().min(1, { message: 'Last name is required!' }),
    phone: z.string().min(1, { message: 'Phone number is required!' }),
    address: z.string().min(1, { message: 'Address is required!' }),
    birthday: z.date({ message: 'Date of birth is required!' }),
    sex: z.enum(["male, female"], { message:"Please select your gender."}),
    img: z.instanceof(File, { message: 'Please upload a valid image file!' }),
  });

const TeacherForm = ({
    type, data
}:{
    type:"create" | "update";
    data?:any
}) => {
    return (
        <form action="" className="">Input</form>
    );
}

export default TeacherForm;