import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddWaste from './waste-forms/add-waste';
import WasteList from './waste-list';
import UpdateWaste from './waste-forms/update-waste';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

export default function Wastes() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [dateAccepted, setDateAccepted] = useState('');
  const [dateReturned, setDateReturned] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [wastes, setWastes] = useState([]);
  const [activeWaste, setActiveWaste] = useState([]);
  const [updateWasteModal, setUpdateWasteModal] = useState(false);
  const [wasteToUpdate, setWasteToUpdate] = useState('');

  useEffect(() => {
    refreshWastes();
  }, []);

  const refreshWastes = async () => {
    const response = await getWasteList();
    setWastes(response);
    setActiveWaste(response.filter((waste) => wastes.active === true));
  };

  const onAddWasteFormSubmit = async (
    enteredName,
    enteredOwner,
    enteredDateAccepted,
    enteredDateReturned,
    enteredPrice,
    enteredCity,
    enteredState,
    enteredPostalCode
  ) => {
    const newWaste = {
      wasteName: enteredName,
      wasteOwner: enteredOwner,
      wasteDateAccepted: new Date(enteredDateAccepted),
      wasteDateReturned: new Date(enteredDateReturned),
      wastePrice: enteredPrice,
      wasteCity: enteredCity,
      wasteState: enteredState,
      wastePostalCode: enteredPostalCode,
      active: true,
    };

    await addWaste(newWaste);
    refreshWastes();
    setName('');
    setOwner('');
    setDateAccepted('');
    setDateReturned('');
    setPrice('');
    setCity('');
    setState('');
    setPostalCode('');
  };

  const archiveWasteHandler = async (wasteId) => {
    const updatedWaste = {
      id: wasteId,
      Active: false,
    };
    await updateWaste(updatedWaste);
    refreshWastes();
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
    newDateAccepted,
    newDateReturned,
    newPrice,
    newCity,
    newState,
    newPostalCode
  ) => {
    const updatedWaste = {
      id: wasteId,
      wasteName: newName,
      wasteOwner: newOwner,
      wasteDateAccepted: newDateAccepted,
      wasteDateReturned: newDateReturned,
      wastePrice: newPrice,
      wasteCity: newCity,
      wasteState: newState,
      wastePostalCode: newPostalCode,
      active: true,
    };
    await updateWaste(updatedWaste);
    refreshWastes();
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
          dateAccepted={dateAccepted}
          dateReturned={dateReturned}
          price={price}
          city={city}
          state={state}
          postalCode={postalCode}
          onNameChange={setName}
          onOwnerChange={setOwner}
          onDateAcceptedChange={setDateAccepted}
          onDateReturnedChange={setDateReturned}
          onCityChange={setCity}
          onStateChange={setState}
          onPostalCodeChange={setPostalCode}
          onPriceChange={setPrice}
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
          wastes={activeWaste}
          archiveWasteHandler={archiveWasteHandler}
          updateWasteHandler={updateModalChange}
        />
      </Box>
    </Container>
  );
}
