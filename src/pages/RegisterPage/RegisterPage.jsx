import GreenButton from "../../shared/ui/buttons/GreenFormButton"
import "./RegisterPage.css"
import InputLine from "../../shared/ui/input/Input"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { AppleIcon, FacebookFormIcon, GoogleIcon } from "../../assets/svg-icons-code/svgCode"
import { RegisterScheme1 } from "../../schemes/RegisterScheme1"
import { useNavigate } from "react-router"
import { useState } from "react"

const RegisterPage = () => {

    const navigate = useNavigate()
    const [isSuccess, setIsSuccess] = useState(false)

    const {handleSubmit, register, formState: {errors, isSubmitting}, watch} = useForm({
        resolver: zodResolver(RegisterScheme1)
    })

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || []

        users.push(data)

        localStorage.setItem("users", JSON.stringify(users))

        setIsSuccess(true)

        setTimeout(() => {
            navigate("/account")
        }, 1500)
    }

    return (
        <>
            <h1 className="form__title">Create Account</h1>

            <form className="form__content" onSubmit={handleSubmit(onSubmit)}>
                
                <InputLine
                    typeText={"text"}
                    placeholder={"First Name"}
                    {...register("firstName")}
                />
                {errors.firstName && (
                    <p className="form__error">{errors.firstName.message}</p>
                )}

                <InputLine
                    typeText={"text"}
                    placeholder={"Last Name"}
                    {...register("lastName")}
                />
                {errors.lastName && (
                    <p className="form__error">{errors.lastName.message}</p>
                )}

                <InputLine
                    typeText={"text"}
                    placeholder={"Email"}
                    {...register("email")}
                />
                {errors.email && (
                    <p className="form__error">{errors.email.message}</p>
                )}

                <InputLine
                    typeText={"password"}
                    placeholder={"Password"}
                    {...register("password")}
                />
                {errors.password && (
                    <p className="form__error">{errors.password.message}</p>
                )}

                <GreenButton text={"Register Now"} type="submit" />

                {isSuccess && (
                    <p className="form__link">
                        Successfully registered! Redirecting to login...
                    </p>
                )}
            </form>

            <div className="form__buttons">

                <p className="form__text smaller">
                    Already have an account?{" "}
                    <span className="form__span2">
                        <Link to={"/account/"} className="form__link">
                            log in
                        </Link>
                    </span>
                </p>

                <p className="form__text smaller2">Or</p>

                <div className="form__icons">
                    <AppleIcon />
                    <GoogleIcon />
                    <FacebookFormIcon />
                </div>

                <p className="form__text">
                    by clicking register now you agree to{" "}
                    <span className="form__span-new">terms & conditions</span>{" "}
                    and <span className="form__span-new">privacy policy</span>.
                </p>

            </div>
        </>
    )
}

export default RegisterPage