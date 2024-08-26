import React from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function InputTextField(props) {
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return  <div className="flex relative">
    <TextField
    type={showPassword ? "text" : props.type}
    style={{width:"100%"}}
    sx={{
        "& .MuiFormControl-root.MuiTextField-root":{
            width: "100%"
        },
        "& .MuiOutlinedInput-root": {
            color: "#fff",
            width: "100%",
            fontWeight: "bold",
            background: props.bg,
            "& .MuiOutlinedInput-notchedOutline": {
                color: props.color,
                borderColor: props.border,
                borderWidth: props.borderWidth,
                borderRadius: '10px'
            },
            "&.Mui-focused": {
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
    label={props.label} variant="outlined" />
    {
        props.type == "password" && <IconButton
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
        style={{color: "#fff", position: "absolute", right:"10px", top: "5px"}}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    }
    </div>
} 