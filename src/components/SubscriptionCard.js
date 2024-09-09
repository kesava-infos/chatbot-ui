import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Divider from "@mui/material/Divider";

function SubscriptionCard(props) {
  return (
    <div className="m-4 bg-secondary rounded-xl border-2 border-white text-white">
      <div className="flex flex-col gap-4 w-full justify-center items-center w-full">
        <h1 className="text-2xl font-bold bg-white text-black p-2 rounded-sm ">
          {props.data.title}
        </h1>
        <h1 className="text-3xl font-bold">{props.data.price}</h1>
        {props.data.description && (
          <h2 className="text-lg p-6">{props.data.description}</h2>
        )}
        <ul className="text-sm py-6 flex flex-col gap-2">
          {props.data.dettails &&
            props.data.dettails.map((det, index) => {
              return (
                <>
                  <li className="flex gap-2 py-2 px-4">
                    <CheckCircleOutlineIcon fontSize="small" /> {det}
                  </li>
                  {index !== props.data.dettails.length - 1 && (
                    <Divider style={{ backgroundColor: "#fff" }} />
                  )}
                </>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default SubscriptionCard;
