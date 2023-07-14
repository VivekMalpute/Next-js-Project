import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  TextField,
  FormControl,
  OutlinedInput,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const router = useRouter();
  interface IUser {
    email: string;
    password: any;
  }
  interface UserValidation {
    emailVal: string;
    passwordVal: String;
  }
  const [loginData, setLoginData] = useState<IUser>({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState<UserValidation>({
    emailVal: "",
    passwordVal: "",
  });
  const handleOnChange = (e: any) => {
    setLoginData((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name == "email") {
      setValidation((prevdata) => ({
        ...prevdata,
        emailVal: "",
      }));
    }
    if (e.target.name == "password") {
      setValidation((prevdata) => ({
        ...prevdata,
        passwordVal: "",
      }));
    }
  };
  const handleValidation = () => {
    const validations = {
      emailVal: "",
      passwordVal: "",
    };
    let isValid = true;
    if (!loginData.email.trim()) {
      isValid = false;
      validations.emailVal = "Email is Compulsory";
    } else {
      validations.emailVal = "";
    }
    if (!loginData.password.trim()) {
      isValid = false;
      validations.passwordVal = "Password is Compulsory";
    } else {
      validations.passwordVal = "";
    }

    setValidation(validations);
    return isValid;
  };

  const handleSubmit = () => {
    let isValid = handleValidation();
    if (!isValid) {
      return false;
    }
    console.log(loginData);
    if (
      loginData.email == "vivek.malpute@brainvire.com" &&
      loginData.password == "Vivek@123"
    ) {
      router.push("/product");
      localStorage.setItem("loginVal", JSON.stringify(true));
      toast.success("Login Successfully", { autoClose: 2000 });
    } else {
      toast.error("Invalid Credentails", { autoClose: 2000 });
      setLoginData({
        email: "",
        password: "",
      });
      
    }
  };

  return (
    // <form className="login-form">
    <>
      {/* <div className="col-md-4">
    <div className="form-group">
        <label>Email:</label>
        <input
          className="form-control"
          type="email"
          name="email"
          autoComplete="off"
          value={loginData.email}
          onChange={(e) => handleOnChange(e)}
        />
        <span>{validation.emailVal}</span>
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          className="form-control"
          type="password"
          autoComplete="off"
          name="password"
          value={loginData.password}
          onChange={(e) => handleOnChange(e)}
        />
        <span>{validation.passwordVal}</span>
      </div>
      <button onClick={handleSubmit} className="btn btn-primary mt-2">
        Login
      </button>
    </div>
    */}
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 8 }}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            sx={{
              border: validation.emailVal ? "2px solid red" : "",
              borderRadius: validation.emailVal ? "10px" : "",
            }}
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={loginData.email}
            onChange={(e) => handleOnChange(e)}
            autoComplete="email"
            autoFocus
          />
          <Typography sx={{ color: "red" }}>{validation.emailVal}</Typography>
          <TextField
            sx={{
              border: validation.passwordVal ? "2px solid red" : "",
              borderRadius: validation.passwordVal ? "10px" : "",
            }}
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={(e) => handleOnChange(e)}
            autoFocus
          />
          <Typography sx={{ color: "red" }}>
            {validation.passwordVal}
          </Typography>
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Container>
      <ToastContainer />
    </>

    // </form>
  );
};

export default LoginForm;
