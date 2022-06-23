import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddWaste from './waste-forms/add-waste';
import WasteList from './waste-list';
import UpdateWaste from './waste-forms/update-waste';
import { addWaste, getWasteList, updateWaste } from '../../services/services';

export default function Waste() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [dateAccepted, setDateAccepted] = useState('');
  const [dateReturned, setDateReturned] = useState('');
  const [wastes, setWastes] = useState([]);
  const [activeWaste, setActiveWaste] = useState([]);
  const [updateWasteModal, setUpdateWasteModal] = useState(false);
  const [wasteToUpdate, setWasteToUpdate] = useState('');

  useEffect(() => {
    refreshWaste();
  }, []);

  const refreshWaste = async () => {
    const response = await getWasteList();
    setWastes(response);
    setActiveWaste(response.filter((waste) => waste.active === true));
  };

  const onAddWasteFormSubmit = async (
    enteredName,
    enteredOwner,
    enteredPrice,
    enteredCity,
    enteredState,
    enteredPostalCode,
    enteredDateAccepted,
    enteredDateReturned
  ) => {
    const newWaste = {
      wasteUserName: enteredName,
      wasteUserOwner: enteredOwner,
      wasteUserPrice: enteredPrice,
      wasteUserCity: enteredCity,
      wasteUserState: enteredState,
      wasteUserPostalCode: enteredPostalCode,
      wasteUserDateAccepted: new Date(enteredDateAccepted),
      wasteUserDateReturned: new Date(enteredDateReturned),
      active: true,
    };

    await addWaste(newWaste);
    refreshWaste();
    setName('');
    setOwner('');
    setPrice('');
    setCity('');
    setState('');
    setPostalCode('');
    setDateAccepted('');
    setDateReturned('');
  };

  const archiveWasteHandler = async (wasteId) => {
    const updatedWaste = {
      id: wasteId,
      Active: false,
    };
    await updateWaste(updatedWaste);
    refreshWaste();
  };

  const updateModalChange = (wasteId) => {
    if (updateWasteModal === true) {
      setUpdateWasteModal(false);
    } else {
      const wasteIndex = wastes.findIndex((waste) => waste.id === wasteId);
      setWasteToUpdate(wastes[wasteIndex]);
      setUpdateWasteModal(true);
    }
  };

  const updateWasteHandler = async (
    wasteId,
    newName,
    newOwner,
    newPrice,
    newCity,
    newState,
    newPostalCode,
    newDateAccepted,
    newDateReturned
  ) => {
    const updatedWaste = {
      id: wasteId,
      wasteUserName: newName,
      wasteUserOwner: newOwner,
      wasteUserPrice: newPrice,
      wasteUserCity: newCity,
      wasteUserState: newState,
      wasteUserPostalCode: newPostalCode,
      wasteUserDateAccepted: newDateAccepted,
      wasteUserDateReturned: newDateReturned,
      active: true,
    };
    await updateWaste(updatedWaste);
    refreshWaste();
    updateModalChange();
  };

  return (
    <Container maxWidth="sm">
      {updateWasteModal && (
        <UpdateWaste
          waste={wasteToUpdate}
          onSubmit={updateWasteHandler}
          handleClose={updateModalChange}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Waste
        </Typography>
        <AddWaste
          name={name}
          owner={owner}
          price={price}
          city={city}
          state={state}
          postalCode={postalCode}
          dateAccepted={dateAccepted}
          dateReturned={dateReturned}
          onNameChange={setName}
          onOwnerChange={setOwner}
          onPriceChange={setPrice}
          onCityChange={setCity}
          onStateChange={setState}
          onPostalCodeChange={setPostalCode}
          onDateAcceptedChange={setDateAccepted}
          onDateReturnedChange={setDateAccepted}
          onSubmit={onAddWasteFormSubmit}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <WasteList
          waste={activeWaste}
          archiveWasteHandler={archiveWasteHandler}
          updateWasteHandler={updateModalChange}
        />
      </Box>
    </Container>
  );
}
