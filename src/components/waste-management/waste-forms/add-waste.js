import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function AddStudent(props) {
  const {
    Name,
    owner,
    price,
    city,
    state,
    postalCode,
    dateAccepted, // do I need a date returned? in the form or is that just something that is updated?
    onNameChange,
    onOwnerChange,
    onPriceChange,
    onCityChange,
    onStateChange,
    onPostalCodeChange,
    onDateAcceptedChange,
  } = props;

  // if any are empty the onSubmitDisabled button is set to true, meaning they cannot submit.
  const onSubmitDisabled =
    !Name ||
    !owner ||
    !price ||
    !city ||
    !state ||
    !postalCode ||
    !dateAccepted;

  const addWasteHandler = (event) => {
    event.preventDefault();
    onsubmit(Name, owner, price, city, state, postalCode, dateAccepted);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            onChange={(event) => onNameChange(event.target.value)}
            required
            value={Name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Owner"
            onChange={(event) => onOwnerChange(event.target.value)}
            required
            value={owner}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField // add input adornments once I can see the website in full
            fullWidth
            label="Price"
            onChange={(event) => onPriceChange(event.target.value)}
            required
            type="number"
            value={price}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="City"
            onChange={(event) => onCityChange(event.target.value)}
            required
            value={city}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField // additional thing to add here could be a dropdown menu with an array of all the states displayed.
            fullWidth
            label="State"
            onChange={(event) => onStateChange(event.target.value)}
            required
            value={state}
          />
        </Grid><Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Postal Code"
            onChange={(event) => onPostalCodeChange(event.target.value)}
            required
            value={postalCode}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date"
            onChange={(event) => onDateAcceptedChange(event.target.value)}
            required
            type="date"
            value={dateAccepted}
          />
        </Grid>
      </Grid>
      <Button
        disabled={onSubmitDisabled}
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        onClick={addWasteHandler}
        variant="contained"
      >
        Add Waste
      </Button>
    </Box>
  );
}

AddStudent.propTypes = {
  Name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  dateAccepted: PropTypes.string.isRequired,
  onNameChange: PropTypes.string.isRequired,
  onOwnerChange: PropTypes.string.isRequired,
  onPriceChange: PropTypes.string.isRequired,
  onCityChange: PropTypes.string.isRequired,
  onStateChange: PropTypes.string.isRequired,
  onPostalCodeChange: PropTypes.string.isRequired,
  onDateAcceptedChange: PropTypes.string.isRequired,
};
