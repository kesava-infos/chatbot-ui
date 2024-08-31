
import { post } from "../config/api";
import { toast } from 'react-toast';
async function loginService(email, password, loginCallback, navigate) {
  try {
    const response = await post('/auth/login',
      {
        "email": email,
        "password": password
      },
      {}
    );
    console.log(response);
    if (response && (response.status || response.statusText === "OK") && response?.data?.token) {
      loginCallback();
      toast.success("Login Success !");
      setTimeout(()=>{
        navigate("/dashboard")
      }, 100)
    } 
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message || "Invalid Email / Password !");
    return error;
  }
}

export { loginService }