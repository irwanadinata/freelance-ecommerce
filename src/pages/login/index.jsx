import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/utils/schema/loginSchema.js";
import { Button } from "@/components/ui/button";
import LazadaPhoto from "@/assets/lazada-photo.png";
import QRphoto from "@/assets/QR.png";
import FBlogo from "@/assets/fb-logo.png";
import GoogleLogo from "@/assets/google-logo.png";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    setChangeIcon(!changeIcon);
  };

  const handleLogin = async (data) => {
    const { email, password } = data;
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (email === "afifah@gmail.com" && password === "afifah@123") {
        setErrorMessage(null);
        navigate("/dashboard");
      } else {
        setErrorMessage("Email atau password salah");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="mt-5 mb-20 mx-5">
        <h1 className="text-xl font-semibold">
          Selamat Datang di Lazada! Silahkan Masuk
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-5 md:space-y-0 md:flex-row md:justify-center md:items-center md:space-x-28">
        <div>
          <img src={LazadaPhoto} alt="lazada-photo" className="w-60 h-auto" />
        </div>
        <div className="flex flex-col w-72 ">
          <form onSubmit={handleSubmit(handleLogin)}>
            <Input
              type="text"
              placeholder="Email atau No. Telepon"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-[#c23d36] text-start font-base text-base">
                {errors.email.message}
              </p>
            )}
            <div className="relative">
              <Input
                className="mt-5"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
              />
              {changeIcon ? (
                <Eye
                  className="absolute right-3 top-1/4 cursor-pointer"
                  onClick={handleTogglePassword}
                />
              ) : (
                <EyeOff
                  className="absolute right-3 top-1/4 cursor-pointer"
                  onClick={handleTogglePassword}
                />
              )}
            </div>
            {errors.password && (
              <p className="text-[#c23d36] text-start font-base text-base">
                {errors.password.message}
              </p>
            )}
            {errorMessage && (
              <p className="text-[#c23d36] text-center font-base text-base">
                {errorMessage}
              </p>
            )}
            <div className="flex justify-center mt-5">
              {loading ? (
                <Loader2 className="animate-spin w-7 h-7" />
              ) : (
                <Button className="bg-[#F8009C] hover:bg-[#e691c7] w-48">
                  Masuk
                </Button>
              )}
            </div>
          </form>
          <div className="relative flex justify-center text-sm mt-5">
            <span className="before:block before:w-1/4 before:bg-black before:h-px before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"></span>
            Atau, masuk dengan
            <span className="before:block before:w-1/4 before:bg-black before:h-px before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2"></span>
          </div>
          <div className="flex justify-center space-x-5">
            <a href="">
              <img
                src={FBlogo}
                alt="facebook-login"
                className="mt-2 w-8 h-auto"
              />
            </a>
            <a href="">
              <img
                src={GoogleLogo}
                alt="google-login"
                className="mt-2 w-8 h-auto"
              />
            </a>
          </div>
          <div className="relative flex justify-center text-sm mt-2">
            <p>
              Member baru? <a href="">disini</a>
            </p>
          </div>
        </div>
        <div>
          <img src={QRphoto} alt="QR-photo" className="w-60 h-auto" />
        </div>
      </div>
    </>
  );
};

export default Login;
