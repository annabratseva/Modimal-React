import { useState } from "react"
import { useDispatch } from "react-redux"
import "./LoginPage.css"
import InputLine from "../../shared/ui/input/Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import GreenButton from "../../shared/ui/buttons/GreenFormButton"
import { AppleIcon, FacebookFormIcon, GoogleIcon } from "../../assets/svg-icons-code/svgCode"
import { Link } from "react-router-dom"
import { login } from "../../BLL/reducers/AuthReducer"
import { LoginScheme1 } from "../../schemes/LoginScheme1"
import { useNavigate } from "react-router"

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState("")

    const { handleSubmit, register, formState: { errors }, watch } = useForm({
        resolver: zodResolver(LoginScheme1)
    })

    const onSubmit = (data) => {
        const savedUsers = JSON.parse(localStorage.getItem("users")) || []
        const foundUser = savedUsers.find(
            user => user.email === data.email && user.password === data.password
        )

        if (!foundUser) {
            setLoginError("No such user.")
            return
        }

        setLoginError("")
        localStorage.setItem("currentUser", JSON.stringify({ email: foundUser.email }))
        dispatch(login({ email: foundUser.email }))
        navigate("/")
    }

    return (
        <>
            <h1 className="form__title">Log In</h1>

            <form className="form__content" onSubmit={handleSubmit(onSubmit)}>
                <InputLine typeText={"text"} placeholder={"Email"} {...register("email")} />
                {!!errors?.email?.message && (
                    <p className="form__error">{errors.email.message}</p>
                )}

                <InputLine typeText={"password"} placeholder={"Password"} {...register("password")} />
                {!!errors?.password?.message && (
                    <p className="form__error">{errors.password.message}</p>
                )}

                {loginError && <p className="form__error">{loginError}</p>}

                <p className="form__forgot">Forgot your password?</p>

                <GreenButton text={"Log In"} type="submit" />
            </form>

            <div className="form__buttons">
                <p className="form__text">Or</p>
                <div className="form__icons">
                    <AppleIcon />
                    <GoogleIcon />
                    <FacebookFormIcon />
                </div>
                <p className="form__text">
                    New To Modimal?{" "}
                    <span className="form__span">
                        <Link to={"/account/register"} className="form__link">
                            Create An Account
                        </Link>
                    </span>
                </p>
            </div>
        </>
    )
}

export default LoginPage