"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { validateHeaderName } from "http";

export default function EmailForm() {
  const {
    setError,
    register,
    trigger,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  console.log("error ", errors);
  const successMessage = "사용 가능한 이메일 입니다.";
  const onSubmit = async (data: any) => {
    try {
      // 이메일 중복 체크
      const response = await axios.post(`http://localhost:3001/api/check-email`, {
        email: data.email,
      });
      const isValid = trigger("email");
      console.log("isValid ", isValid);
      setIsEmailAvailable(response.data.check);
    } catch (error) {
      console.error("Error checking email:", error);
    }
  };
  const handleCheckEmail = async (email: string, e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(email);
    const response = await axios.post(`http://localhost:3001/api/check-email`, {
      email,
    });
    const isValid = await trigger("email");
    console.log("isValide ", isValid);
    if (!isValid) {
      return;
    }
    if (response.data.check) {
      console.log("통과 ");
      setIsEmailValidate(true);
      return;
    }
    setError("email", { type: "custom", message: "중복된 이메일이 존재합니다." });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Invalid email address",
            },
          })}
        />
        {isEmailValidate && <p>{successMessage}</p>}
        {errors["email"] && <p>{errors?.email.message}</p>}
        {!isEmailAvailable && <p>Email already exists</p>}
      </div>
      <div style={{ padding: "30px" }}>
        <button type="button" onClick={(e) => handleCheckEmail(getValues("email"), e)}>
          Duplicate Email Check
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
