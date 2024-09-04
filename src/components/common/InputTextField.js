import React from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function InputTextField(props) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return <div><div className="flex relative">
        <TextField
            name={props.name}
            id={props.name}
            value={props.formik?.values[props.name]}
            onChange={props.formik?.handleChange}
            autoComplete="off"
            size="small"
            type={showPassword ? "text" : props.type}
            style={{ width: "100%" }}
            sx={{
                "& .MuiFormControl-root.MuiTextField-root": {
                    width: "100%"
                },
                "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    width: "100%",
                    fontWeight: "bold",
                    background: props.bg,
                    "&:hover fieldset": {
                        borderColor: "#ccc"
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        color: props.color,
                        borderColor: props.border,
                        borderWidth: props.borderWidth,
                        borderRadius: '30px',
                    },
                    "&.Mui-focused": {
                        borderColor: props.border,
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: props.border,
                        },
                    },
                },
                "& .MuiInputLabel-outlined": {
                    color: props.color,
                    border: "1px",
                    "&.Mui-focused": {
                        fontWeight: "bold",
                        border: "1px"
                    },
                }
            }}
            label={props.label}
            variant="outlined" />
        {
            props.type === "password" && <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                style={{ color: "#fff", position: "absolute", right: "20px", top: "2px" }}
            >
                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
            </IconButton>
        }
    </div>
        {
            props.formik?.errors[props.name] && <div className="text-[#fff] text-left pl-[5%] text-[10px]"> <ErrorOutlineIcon sx={{ fontSize: "12px" }} />  {props.formik?.errors[props.name]}</div>
        }
    </div>
} 