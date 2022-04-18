//! --- IMPORTS --- !
//     * REACT-JS MODULES
import React from "react";

//! --- COMPONENT --- !
// eslint-disable-next-line react/display-name
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    //     * REFS
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    //     * USE-EFFECTS
    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    //! --- RENDER --- !
    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

export default IndeterminateCheckbox;
