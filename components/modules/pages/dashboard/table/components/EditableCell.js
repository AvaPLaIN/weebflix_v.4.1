//! --- IMPORTS --- !
//     * REACT-JS MODULES
import React from "react";

//! --- COMPONENT --- !
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
  editable,
}) => {
  //     * STATES
  const [value, setValue] = React.useState(initialValue);

  //     * HANDLERS
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateMyData(index, id, value);
  };

  //     * USE-EFFECTS
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (!editable) {
    return `${initialValue}`;
  }

  //! --- RENDER --- !
  return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

export default EditableCell;
