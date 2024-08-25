import React from "react";
import TextField from '@mui/material/TextField';

export default function InputTextField(props) {
    return  <TextField
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
} 