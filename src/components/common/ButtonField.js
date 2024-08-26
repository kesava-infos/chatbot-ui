import Reactt from "react";
import Button from '@mui/material/Button';

export default function ButtonField(props) {
    return <Button
        style={{
            borderRadius: 35,
            backgroundColor: props.bg,
            padding: "10px 50px",
            textTransform: "capitalize"
        }}
        variant="contained"
        onClick={props.clicked}
        >{props.label}</Button>
}