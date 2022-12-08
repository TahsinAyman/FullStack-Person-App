import {
  Box,
  Button,
  SpeedDial,
  SpeedDialIcon,
  TextField,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../model/Person";
import PopupDialog from "../common/PopupDialog";

export default function PersonUpdate(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (d) => {
    var data = !d.id ? { ...d, id: null } : { ...d, id: Number(d.id) };
    props.setPerson(data);
  };

  return (
    <Box
      container
      component="form"
      textAlign="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box container justifyContent="center">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            borderRadius: "50%",
            margin: "4px 2px",
            border: "none",
            display: "inline-block",
            fontSize: "16px",
            padding: "20px",
          }}
        >
          <EditIcon />
        </Button>
      </Box>
      <br />
      <TextField
        defaultValue={props.currentPerson.getId()}
        label="ID"
        type="number"
        placeholder="ID"
        fullWidth
        {...register("id")}
      />
      <br />
      <br />
      <TextField
        label="Name"
        {...register("name")}
        placeholder="Name"
        fullWidth
        type="text"
        error={errors.name?.message}
        helperText={errors.name?.message}
        defaultValue={props.currentPerson.name}
      />
      <br />
      <br />
      <TextField
        label="Age"
        type="number"
        placeholder="Age"
        {...register("age")}
        fullWidth
        error={errors.name?.message}
        helperText={errors.name?.message}
        defaultValue={props.currentPerson.age}
      />
      <PopupDialog
        open={props.open}
        setOpen={props.setOpen}
        message={props.message}
        alertType={props.alertType}
      />
    </Box>
  );
}
