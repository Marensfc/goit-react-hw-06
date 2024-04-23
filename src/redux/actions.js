export const addContact = contact => {
  return {
    type: "contacts/addContact",
    payload: contact,
  };
};

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

export const setFilters = value => {
  return {
    type: "filters/setFilterName",
    payload: value,
  };
};
