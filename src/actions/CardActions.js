export const nameChanged = text => {
  return {
      type: 'name_changed',
      payload: text
  };
};

export const descriptionChanged = text => {
    return {
        type: 'description_changed',
        payload: text
    };
};

