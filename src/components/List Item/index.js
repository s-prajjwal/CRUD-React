import React from "react";
import { ButtonType } from "../../utils/constants";
import PrimaryButton from "../PrimaryButton";

const ListItem = ({lead, modifyState}) => {
    const {
        id,
        first_name,
        last_name,
        email,
        mobile,
        location_type,
        location_string,
      } = lead;
      return (
        <tr key={id}>
          <td>{first_name + " " + last_name}</td>
          <td>{email}</td>
          <td>{mobile}</td>
          <td>{location_type}</td>
          <td>{location_string}</td>
          <td>
            <PrimaryButton
              type={ButtonType.UPDATE}
              text="Mark Update"
              handleClick={()=>{modifyState({showUpdateModal: true, selectedId: id})}}
            />
            <PrimaryButton
              type={ButtonType.DELETE}
              text="Delete"
              handleClick={()=>{modifyState({showDeleteModal: true, selectedId: id})}}
            />
          </td>
        </tr>
      );
}

export default ListItem;